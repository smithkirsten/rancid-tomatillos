import React from 'react'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import './MainPage.css'

const MainPage = ({ movies, worstMovies, selectMovie }) => {
  console.log(movies, worstMovies)
    //conditionally render loading component from here
  if (movies.length < 1) {
    return <p className='loading'>loading</p>
  }

  return (
    <main className='App'>
      <Header />
        <section className="movies-display">
        <h2>Worst Rated Movie</h2>
        <Slider movies={worstMovies} scroll={false} />
        <h2>All Movies</h2>
        <Slider movies={movies} scroll={true} />
      </section>
    </main>
  )
}

export default MainPage