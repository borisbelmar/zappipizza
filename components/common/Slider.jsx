import { register } from 'swiper/element'
import { Autoplay } from 'swiper/modules'
import PropTypes from 'prop-types'

export const initSwiper = () => {
  register()

  const swiperEl = document.querySelector('swiper-container')

  const params = {
    modules: [Autoplay],
    injectStylesUrls: [],
  }

  Object.assign(swiperEl, params)

  swiperEl.initialize()
}

export default function Slider({ slides, autoplayDelay }) {
  return (
    <swiper-container init="false" autoplay-delay={autoplayDelay} loop="true">
      {slides.map(slide => (
        <swiper-slide key={slide.id}>
          {slide.Component}
        </swiper-slide>
      ))}
    </swiper-container>
  )
}

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
  autoplayDelay: PropTypes.number
}

Slider.defaultProps = {
  autoplayDelay: 5000
}
