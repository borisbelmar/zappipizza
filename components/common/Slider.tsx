'use client'

import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import { register, type SwiperContainer } from 'swiper/element'
import { Autoplay } from 'swiper/modules'
import cn from '@/utils/cn'

/** Debe coincidir con el breakpoint definido en @utility slide-picture (app/globals.css) */
const MOBILE_BREAKPOINT = 560

export type SlideImage = { src: string; width: number; height: number }
export type Slide = { id: number; alt: string; desktop: SlideImage; mobile: SlideImage }

type Props = { slides: Slide[]; autoplayDelay?: number }

export default function Slider({ slides, autoplayDelay = 5000 }: Props) {
  const containerRef = useRef<SwiperContainer>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    register()
    const swiperEl = containerRef.current
    if (!swiperEl) return
    Object.assign(swiperEl, { modules: [Autoplay], injectStylesUrls: [] })
    swiperEl.initialize()

    const { swiper } = swiperEl
    const handleSlideChange = () => setActiveIndex(swiper.realIndex)
    swiper.on('slideChange', handleSlideChange)
    return () => swiper.destroy(true, true)
  }, [])

  return (
    <div className="relative">
      <swiper-container ref={containerRef} init="false" autoplay-delay={autoplayDelay} loop="true">
        {slides.map((slide, index) => (
          <swiper-slide key={slide.id}>
            <picture
              className="slide-picture block w-full"
              style={
                {
                  '--slide-ar-desktop': `${slide.desktop.width} / ${slide.desktop.height}`,
                  '--slide-ar-mobile': `${slide.mobile.width} / ${slide.mobile.height}`
                } as CSSProperties
              }
            >
              <source media={`(max-width: ${MOBILE_BREAKPOINT}px)`} srcSet={slide.mobile.src} />
              <img
                src={slide.desktop.src}
                alt={slide.alt}
                className="h-full w-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </picture>
          </swiper-slide>
        ))}
      </swiper-container>
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Ir a la promoción ${index + 1}`}
            aria-current={index === activeIndex}
            onClick={() => containerRef.current?.swiper.slideToLoop(index)}
            className={cn(
              'h-2.5 w-2.5 rounded-full bg-white/60 transition-colors',
              index === activeIndex && 'bg-primary'
            )}
          />
        ))}
      </div>
    </div>
  )
}
