import React from 'react'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import './MainPage.css'

const MainPage = ({ movies, worstMovies, selectMovie }) => {
  console.log(movies, worstMovies)

  return (
    <main className='App'>
      <Header />
      <section className="movies-display">
        <h2>Worst Rated Movie</h2>
        <Slider movies={worstMovies} scroll={false} selectMovie={selectMovie} />
        <h2>All Movies</h2>
        <Slider movies={movies} scroll={true} selectMovie={selectMovie} />
      </section>
    </main>
  )
}

export default MainPage