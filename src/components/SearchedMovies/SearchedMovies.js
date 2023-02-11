import React from 'react'
import { Link } from 'react-router-dom'
import './SearchedMovies.css'

const SearchedMovies = ({ searchedMovies }) => {
  const filteredMovies = searchedMovies.map(movie => <Link to={"/movie/" + movie.id} ><img className='filtered-movies' src={movie.poster_path} alt={movie.title} /></Link>)
  return (
    <section className='filtered-movies-section'>
      {filteredMovies}
    </section>
  )
}

export default SearchedMovies