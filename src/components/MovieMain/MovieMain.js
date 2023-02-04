import './MovieMain.css'
import React, { Component } from 'react'
import Slider from '../Slider/Slider'

const MovieMain = (props) => {
  const { title, tagline, runtime, genres, poster_path, overview } = props.movie
  const { videos } = props
  return (
    <section className="movie-info">
      <div className="overview-area">
        <p className="tagline">{tagline}<span className="runtime">{runtime}</span></p>
        <img src={poster_path} alt={title}/>
        <p className="summary">{overview}</p>
      </div>
      <div className="genres">
        <p>{genres}</p>
      </div>
      <Slider videos={videos}/>
    </section>
  )
}
//should overview area be its own component?

export default MovieMain