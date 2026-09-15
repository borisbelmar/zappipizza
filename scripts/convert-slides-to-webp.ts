/**
 * Convierte todas las imágenes de public/images/slides/ a WebP y regenera
 * data/slides.json (la fuente de datos que consume el slider de la home).
 *
 * Convención de nombres esperada: "<id>-desktop.<ext>" y "<id>-mobile.<ext>",
 * mismo <id> numérico para ambas variantes de una misma slide. Las variantes
 * "desktop" se normalizan a DESKTOP_WIDTH x DESKTOP_HEIGHT (recorte centrado)
 * para que todas las slides midan lo mismo y el carrusel no salte de alto.
 *
 * Uso: bun run slides:build
 */
import { readdir, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SLIDES_DIR = path.join(process.cwd(), 'public', 'images', 'slides')
const MANIFEST_PATH = path.join(process.cwd(), 'data', 'slides.json')
const PUBLIC_BASE = '/images/slides'
const RASTER_EXTENSIONS: Record<string, true> = { '.png': true, '.jpg': true, '.jpeg': true }
const SLIDE_NAME = /^(\d+)-(desktop|mobile)\.webp$/
const DESKTOP_WIDTH = 1920
const DESKTOP_HEIGHT = 700

type SlideImage = { src: string; width: number; height: number }
type Slide = { id: number; alt: string; desktop: SlideImage; mobile: SlideImage }

async function convertToWebp() {
  const entries = await readdir(SLIDES_DIR)
  for (const name of entries) {
    const ext = path.extname(name).toLowerCase()
    const isWebp = ext === '.webp'
    if (!isWebp && !RASTER_EXTENSIONS[ext]) continue

    const isDesktop = name.includes('-desktop.')
    const source = path.join(SLIDES_DIR, name)
    const targetName = `${path.basename(name, ext)}.webp`
    const target = path.join(SLIDES_DIR, targetName)

    if (isWebp && !isDesktop) continue // variante mobile ya en su formato final

    if (isWebp && isDesktop) {
      const { width, height } = await sharp(source).metadata()
      if (width === DESKTOP_WIDTH && height === DESKTOP_HEIGHT) continue // ya normalizada
    }

    let pipeline = sharp(source)
    if (isDesktop) {
      pipeline = pipeline.resize(DESKTOP_WIDTH, DESKTOP_HEIGHT, {
        fit: 'cover',
        position: 'centre'
      })
    }
    const buffer = await pipeline.webp({ quality: 80 }).toBuffer()

    await writeFile(target, buffer)
    if (source !== target) await unlink(source)
    console.log(`convertido: ${name} -> ${targetName}`)
  }
}

async function readSlideImage(fileName: string): Promise<SlideImage> {
  const { width, height } = await sharp(path.join(SLIDES_DIR, fileName)).metadata()
  if (!width || !height) throw new Error(`no se pudo leer el tamaño de ${fileName}`)
  return { src: `${PUBLIC_BASE}/${fileName}`, width, height }
}

async function buildManifest() {
  const entries = await readdir(SLIDES_DIR)
  const byId = new Map<number, { desktop?: string; mobile?: string }>()

  for (const name of entries) {
    const match = name.match(SLIDE_NAME)
    if (!match) {
      console.warn(`omitido del slider (nombre no reconocido): ${name}`)
      continue
    }
    const [, idText, variant] = match
    const id = Number(idText)
    const entry = byId.get(id) ?? {}
    entry[variant as 'desktop' | 'mobile'] = name
    byId.set(id, entry)
  }

  const slides: Slide[] = []
  for (const id of [...byId.keys()].sort((a, b) => a - b)) {
    const entry = byId.get(id)
    if (!entry?.desktop || !entry.mobile) {
      console.warn(
        `slide ${id} incompleto (falta versión ${entry?.desktop ? 'mobile' : 'desktop'}), se omite`
      )
      continue
    }
    slides.push({
      id,
      alt: 'Promoción',
      desktop: await readSlideImage(entry.desktop),
      mobile: await readSlideImage(entry.mobile)
    })
  }

  await writeFile(MANIFEST_PATH, `${JSON.stringify(slides, null, 2)}\n`)
  console.log(`data/slides.json generado con ${slides.length} slide(s)`)
}

await convertToWebp()
await buildManifest()
