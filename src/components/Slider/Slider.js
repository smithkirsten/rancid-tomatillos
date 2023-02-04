import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css/bundle' <- not working
import './Slider.css'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'
import { Autoplay, Navigation } from 'swiper'


const buildABear = ({ movies, selectMovie, videos }) => {
  if(videos.length > 0) {
    //return video slides
  }

  if(movies.length > 0) {
    return movies.map(movie => {
      return (
      <SwiperSlide className="slide" key={movie.id}><img src={movie.poster_path} alt={movie.title} onClick={() => selectMovie(movie.id)} id={movie.id}/></SwiperSlide>
      )
    }) 
  } else {
    let slides = []
    for (let i = 0; i < 50; i++) {
      slides.push((
        <SwiperSlide className="slide" key={Date.now()}><div className="loading-card"></div></SwiperSlide>
      ))
    }
    return slides
  }
  //style loading-card and set scroll to be true is movies.length < 0
    //slider will auto scroll through blank cards while the movies load
}

const Slider = (props) => {
  const slides = buildABear(props)
  const scroll = props.scroll ? { delay: 900, disableOnInteraction: true, } : false //add autoplay if it is for all movies so they will rotate
  const perView = props.scroll ? 10 : 5
  return (
      <Swiper
        spaceBetween={60}
        modules={[Navigation, Autoplay]}
        slidesPerView={perView}
        navigation={true}
        direction='horizontal'
        autoplay={scroll}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides}
      </Swiper>

  )
}

export default Slider