import React, { Component } from 'react'
import spinner from '../../assets/Spinner.gif'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'

//if loading MainPage, load dummy slides
//if loading MovieDetails, load spinner
const Loading = ({ allMovies }) => {
  if (allMovies) {
    return (
      <main className='App'>
        <Header error='loading' />
        <section className='movies-display'>
          <Slider />
          <Slider />
        </section>
      </main>

  
    )
  }
  return (
    <main className='App'>
      <Header error='loading' />
      <section className="error-page">
        <img src={spinner} alt='loading' className='spinner' />
      </section>
    </main>
  )
}

export default Loading