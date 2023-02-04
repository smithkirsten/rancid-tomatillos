import './MovieHeader.css'
import React, { Component } from 'react'

const MovieHeader = (props) => {
  const { title, backdrop_path, rating, release_date, budget, revenue } = props.movie
  //install day.js
  const background = `background-image: url(${backdrop_path})`
  return (
    <nav className="movie-header" style={background}>
      <div>
        <p className="deets movie-title">{title}</p>
        <p className="deets movie-rating">{rating}/10</p>
        <p className="deets movie-date">released: {release_date}</p>
      </div>
      <div>
        <button onClick={props.backToMain}>Back to All Movies</button>
        <div>
          <p>Revenue: {budget}</p>
          <p>Budget: {revenue}</p>
        </div>
      </div>
    </nav>
  )
}

export default MovieHeader