import React from 'react'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'

const MainPage = ({ movies, worstMovies, selectMovie }) => {
  console.log(movies, worstMovies)

  return (
    <main className='App'>
      <Header />
      <section className="movies-display">
        <Slider key="1" sectionTitle={'Worst Rated Movies'} movies={worstMovies} scroll={false} selectMovie={selectMovie} />
        <Slider key="2" sectionTitle={'All Movies'} movies={movies} scroll={true} selectMovie={selectMovie} />
      </section>
    </main>
  )
}

export default MainPage