import './MovieMain.css'
import React, { Component } from 'react'
import Slider from '../Slider/Slider'

const MovieMain = (props) => {
  const { title, tagline, runtime, genres, poster_path, overview, budget, revenue } = props.movie
  const { videos } = props
  console.log(budget, revenue)
  const movieHours = runtime / 60
  const movieMinutes = (movieHours - Math.floor(movieHours)) * 60
  // console.log(movieHours, Math.(movieHours))
  const formattedTime = `${Math.floor(movieHours)} hrs ${Math.abs(Math.floor(movieMinutes))} mins`
  return (
    <section className="movie-info">
      <div className="overview-area">
        <p className="tagline">{tagline}<span className="runtime">{formattedTime}</span></p>
        <div className='poster-section'>
          <img className= "poster" src={poster_path} alt={title}/>
          <p className="summary">{overview}</p>
        </div>
        <div className="money-matters">
          {revenue !== 0 && (<p><strong>Revenue:</strong> {budget}</p>)}
          {budget !== 0 && (<p><strong>Budget:</strong> {revenue}</p>)}
      </div>
      </div>
      <Slider videos={videos}/>
    </section>
  )
}
//should overview area be its own component?

export default MovieMain