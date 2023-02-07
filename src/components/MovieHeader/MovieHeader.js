import './MovieHeader.css'
import React from 'react'
import { Link } from 'react-router-dom'

const MovieHeader = (props) => {
  const { title, backdrop_path, average_rating, runtime, genres } = props.movie
  const movieHours = runtime / 60
  const movieMinutes = (movieHours - Math.floor(movieHours)) * 60
  const formattedTime = `${Math.floor(movieHours)} hrs ${Math.abs(Math.floor(movieMinutes))} mins`
  const formattedGenres = !genres ? '' : genres.length > 1 ? genres.join(' | ') : genres
  console.log(genres)
  return (
    <nav className="movie-header" style={{ backgroundImage: `url(${backdrop_path})` }}>
      <div className='header-details'>
        <p className="deets movie-title">{title}</p>
        <p className="deets movie-rating">{average_rating}/10</p>
        <p className="deets movie-runtime">{formattedTime}</p>
      </div>
      <div className='genres-back-button-section'>
        <Link to="/" ><button className='back-to-main-button' onClick={props.backToMain}>Back to All Movies</button></Link>
        <div className='deets genres'>
          <p>{formattedGenres}</p>
        </div>
      </div>
    </nav>
  )
}

export default MovieHeader