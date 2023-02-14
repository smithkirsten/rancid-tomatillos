import './MovieMain.css'
import { formatDollars } from '../../util'
import React from 'react'
import Slider from '../Slider/Slider'
import PropTypes from 'prop-types'

const MovieMain = (props) => {
  const { title, tagline, release_date, poster_path, overview, budget, revenue } = props.movie
  const { videos } = props
  return (
    <section className="movie-info">
      <div className="overview-area">
        <div className='poster-section'>
          <img className="poster" src={poster_path} alt={title} />
          <div>
            <p className="tagline">{tagline}</p>
            <p className="movie-date">Released {release_date}</p>
            <p className="summary">{overview}</p>
          </div>
        </div>
        <div className="money-matters">
          <p className="money">Revenue:{formatDollars(budget)}</p>
          <p className="money">Budget: {formatDollars(revenue)}</p>
        </div>
      </div>
      {!videos.length ? <div className='no-videos'>No trailers are available for this movie</div> : <Slider videos={videos} />}
    </section>
  )
}

export default MovieMain

MovieMain.propTypes = {
  movie: PropTypes.object,
  videos: PropTypes.arrayOf(PropTypes.object),
}