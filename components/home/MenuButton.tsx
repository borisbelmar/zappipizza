import Link from 'next/link'

export default function MenuButton() {
  return (
    <Link href="/menu">
      <button
        type="button"
        className="cursor-pointer hover:bg-white hover:text-primary transition duration-150 py-2 px-4 border font-display font-bold text-2xl border-primary bg-primary text-white rounded w-full block"
      >
        MIRA NUESTRO MENÚ
      </button>
    </Link>
  )
}
