import React from 'react'
import spinner from '../../assets/Spinner.gif'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import PropTypes from 'prop-types'

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

Loading.propTypes = {
  allMovies: PropTypes.array
}