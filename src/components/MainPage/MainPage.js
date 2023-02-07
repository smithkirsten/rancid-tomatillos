import React from 'react'
import Error from '../Error/Error'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import './MainPage.css'

const MainPage = ({ movies, worstMovies, error }) => {
    //conditionally render loading component from here
  if (movies.length < 1) {
    return <p>loading</p>
  }

  return error ? 
    (<Error error={error} />) :
    (
    <main className='App'>
      <Header error={error}/>
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