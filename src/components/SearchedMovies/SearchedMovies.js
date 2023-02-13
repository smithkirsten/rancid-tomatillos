import React from 'react'
import { Link } from 'react-router-dom'
import './SearchedMovies.css'
import PropTypes from 'prop-types'

const SearchedMovies = ({ searchedMovies, searchInput }) => {
  const filteredMovies = searchedMovies.map(movie => <Link to={"/movie/" + movie.id} ><img className='filtered-movies' src={movie.poster_path} key={movie.id} alt={movie.title} /></Link>)
  return (
    filteredMovies.length ? <section className='filtered-movies-section'>{filteredMovies}</section> : <h2 className='no-movies'>No movie titles found matching "<span className='input'>{searchInput}</span>"</h2>
  )
}

export default SearchedMovies

SearchedMovies.propTypes = {
  searchedMovies: PropTypes.arrayOf(PropTypes.object),
  searchedInput: PropTypes.string,
}