import React from 'react'
import { Link } from 'react-router-dom'
import './SearchedMovies.css'

const SearchedMovies = ({ searchedMovies, searchInput }) => {
  const filteredMovies = searchedMovies.map(movie => <Link to={"/movie/" + movie.id} ><img className='filtered-movies' src={movie.poster_path} key={movie.id} alt={movie.title} /></Link>)
  return 
    filteredMovies ? (<section className='filtered-movies-section'>{filteredMovies}</section>) : (<h2></h2>)
  
}

export default SearchedMovies