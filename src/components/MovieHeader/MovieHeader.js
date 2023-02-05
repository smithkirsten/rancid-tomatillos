import './MovieHeader.css'
import dayjs from 'dayjs'
import React from 'react'

const MovieHeader = (props) => {
  const { title, backdrop_path, average_rating, release_date, budget, revenue } = props.movie
  const background = { backgroundImage: backdrop_path }
  return (
    <nav className="movie-header" style={background}>
      <div className='header-details'>
        <p className="deets movie-title">{title}</p>
        <p className="deets movie-rating">{average_rating}/10</p>
        <p className="deets movie-date">Released {dayjs(release_date).format('MMM D, YYYY')}</p>
      </div>
      <div className='revenue-back-button-section'>
        <button className='back-to-main-button' onClick={props.backToMain}>Back to All Movies</button>
        <div className='revenue-details'>
          <p><strong>Revenue:</strong> {budget}</p>
          <p><strong>Budget:</strong> {revenue}</p>
        </div>
      </div>
    </nav>
  )
}

export default MovieHeader