import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Slider.css'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'
import 'swiper/scss/a11y'
import 'swiper/css/keyboard'
import { Autoplay, Navigation, A11y, Keyboard } from 'swiper'


const buildABear = ({ movies, selectMovie }) => {
  console.log('# of slides: ', movies.length)
  return movies.map(movie => {
    return (
    <SwiperSlide className="slide" key={movie.id}><img src={movie.poster_path} alt={movie.title} onClick={() => selectMovie(movie.id)} id={movie.id}/></SwiperSlide>
    )
  })

}

const Slider = (props) => {
  const slides = buildABear(props)
  const scroll = props.scroll ? { delay: 1200, disableOnInteraction: true, } : false //add autoplay if it is for all movies so they will rotate
  const perView = props.scroll ? 7 : 7
  const ally = {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
    enabled: true,
    lastSlideMessage: "This is the last slide",
  }
  return (
    <div>
      <h2 className='section-title'>{props.sectionTitle}</h2>
      <Swiper
        spaceBetween={50}
        modules={[Navigation, Autoplay, A11y, Keyboard]}
        slidesPerView={perView}
        navigation={true}
        direction='horizontal'
        autoplay={scroll}
        a11y={ally}
        rewind={{enabled: true}}
        keyboard={{enabled: true}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        {slides}
      </Swiper>
    </div>
  )
}

export default Slider