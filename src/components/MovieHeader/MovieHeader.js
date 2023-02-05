import './MovieHeader.css'
import dayjs from 'dayjs'
import React from 'react'

const MovieHeader = (props) => {
  const { title, backdrop_path, average_rating, runtime, genres } = props.movie
  const movieHours = runtime / 60
  const movieMinutes = (movieHours - Math.floor(movieHours)) * 60
  const formattedTime = `${Math.floor(movieHours)} hrs ${Math.abs(Math.floor(movieMinutes))} mins`
  return (
    <nav className="movie-header" style={{ backgroundImage: `url(${backdrop_path})` }}>
      <div className='header-details'>
        <p className="deets movie-title">{title}</p>
        <p className="deets movie-rating">{average_rating}/10</p>
        <p className="deets movie-runtime">{formattedTime}</p>
      </div>
      <div className='genres-back-button-section'>
        <button className='back-to-main-button' onClick={props.backToMain}>Back to All Movies</button>
        <div className='deets genres'>
          <p>{genres}</p>
        </div>
      </div>
    </nav>
  )
}

export default MovieHeader