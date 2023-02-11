import React from 'react'
import { Link } from 'react-router-dom'
import './SearchedMovies.css'

const SearchedMovies = ({ searchedMovies, searchInput }) => {
  const filteredMovies = searchedMovies.map(movie => <Link to={"/movie/" + movie.id} ><img className='filtered-movies' src={movie.poster_path} key={movie.id} alt={movie.title} /></Link>)
  console.log(filteredMovies)
  return (
    filteredMovies.length ? <section className='filtered-movies-section'>{filteredMovies}</section> : <h2 className='no-movies'>No movie titles found matching "<span className='input'>{searchInput}</span>"</h2>
  )
}

export default SearchedMovies