import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/scss/bundle' <- not working
import './Slider.css'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/autoplay'
import { Autoplay, Navigation, A11y, Keyboard } from 'swiper'
import { Link } from 'react-router-dom'

//og width: 560 height: 315
const buildVideoSlides = (videos) => {
  return videos.map(video => {
    const src = `https://www.youtube.com/embed/${video.key}`
    return (
    <SwiperSlide className="video-slide" key={video.id}>
      <iframe 
        width="560" 
        height="315" 
        src={src} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    </SwiperSlide>
    )
  })
}

const buildDummySlides = () => {
  let slides = []
  for (let i = 0; i < 50; i++) {
    slides.push((
      <SwiperSlide className="slide" key={Date.now()}><div className="loading-card"></div></SwiperSlide>
    ))
  }
  return slides
}

const buildMovieSlides = (movies, selectMovie) => {
  return movies.map(movie => {
    const aria = `Click to view details for ${movie.title}`

    return (
        <SwiperSlide className="slide" key={movie.id}><Link to={"/movie/" + movie.id} ><button onClick={() => selectMovie(movie.id)} id={movie.id}><img className='poster-image' aria-label={aria} src={movie.poster_path} alt={movie.title} /></button></Link></SwiperSlide>
    )
  }) 
}

const buildABear = ({ movies, selectMovie, videos }) => {
  if(videos) {
    return buildVideoSlides(videos)
  }

  if(movies.length > 0) {
    return buildMovieSlides(movies, selectMovie)
    
  } else {
    return buildDummySlides()
    //style loading-card and set scroll to be true is movies.length < 0
      //slider will auto scroll through blank cards while the movies load
  }
}

const Slider = (props) => {
  const type = props.videos ? 'video-swiper' : 'poster-swiper'
  const slides = buildABear(props)
  const scroll = props.scroll ? { delay: 1200, disableOnInteraction: true, } : false //add autoplay if it is for all movies so they will rotate
  const perView = props.videos ? 1 : 7
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
        className={type}
        spaceBetween={50}
        modules={[Navigation, Autoplay, A11y, Keyboard]}
        slidesPerView={perView}
        navigation={true}
        direction='horizontal'
        // autoplay={scroll}
        a11y={ally}
        // rewind={true}
        keyboard={true}
        >
        {slides}
      </Swiper>
    </div>
  )
}

export default Slider