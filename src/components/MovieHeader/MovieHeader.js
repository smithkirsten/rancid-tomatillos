import './MovieHeader.css'
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MovieHeader = (props) => {
  const { title, backdrop_path, average_rating, runtime, genres } = props.movie

  return (
    <nav className="movie-header" style={{ backgroundImage: `url(${backdrop_path})` }}>
      <div className='header-details'>
        <p className="deets movie-title">{title}</p>
        <p className="deets movie-rating">{average_rating}/10</p>
        <p className="deets movie-runtime">{runtime}</p>
      </div>
      <div className='genres-back-button-section'>
        <Link to="/" ><button className='back-to-main-button' >Back to All Movies</button></Link>
        <div className='deets genres'>
          <p>{genres}</p>
        </div>
      </div>
    </nav>
  )
}

export default MovieHeader

MovieHeader.propTypes = {
  movie: PropTypes.object,
}