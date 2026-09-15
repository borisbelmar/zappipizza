import type { DetailedHTMLProps, HTMLAttributes } from 'react'
import type { SwiperContainer, SwiperSlide } from 'swiper/element'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': DetailedHTMLProps<HTMLAttributes<SwiperContainer>, SwiperContainer> & {
        init?: string
        loop?: string
        'autoplay-delay'?: number
      }
      'swiper-slide': DetailedHTMLProps<HTMLAttributes<SwiperSlide>, SwiperSlide>
    }
  }
}
