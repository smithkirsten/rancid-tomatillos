import React from 'react'
import Error from '../Error/Error'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import Loading from '../Loading/Loading'
import SearchedMovies from '../SearchedMovies/SearchedMovies'
import './MainPage.css'
import PropTypes from 'prop-types'

const MainPage = ({ movies, worstMovies, error, handleSearch, searchedMovies, searchInput }) => {

  if (movies.length < 1) {
    return <Loading allMovies={true} />
  }

  if (error) {
    return (<Error error={error} />)
  }

  return (
    <main className='App'>
      <Header error={error} handleSearch={handleSearch} />
      {searchInput ? <SearchedMovies searchInput={searchInput} searchedMovies={searchedMovies} /> :
        <section className="movies-display">
          <h2>Worst Rated Movie</h2>
          <Slider movies={worstMovies} scroll={false} />
          <h2>All Movies</h2>
          <Slider movies={movies} scroll={true} />
        </section>
      }
    </main>
  )
}

export default MainPage

MainPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  worstMovies: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
  searchedMovies: PropTypes.arrayOf(PropTypes.object),
  searchedInput: PropTypes.string,
}