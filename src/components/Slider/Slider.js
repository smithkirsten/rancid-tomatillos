import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
//import 'swiper/scss/bundle'

const buildABear = (props) => {
  props.movies.forEach(movie => {
    return (
    <SwiperSlide><img src="{movie.poster_path}" alt={movie.title} onClick={() => props.selectMovie(movie.id)} id={movie.id}/></SwiperSlide>
    )
  })

}

const Slider = (props) => {
  const slides = buildABear(props)
  const scroll = props.scroll ? true : false //add autoplay if it is for all movies so they will rotate

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: {scroll},
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides}
    </Swiper>

  )
}

export default Slider