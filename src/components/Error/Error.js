import React from 'react'
import './Error.css'
import Header from '../Header/Header'
import '../../assets/movie.png'

const Error = ({ error }) => {
  console.log(error)
  return (
    <main className="App">
      <Header />
      <section className="error-display">
        <h2>Whoops! We couldn't find what you're looking for</h2>
        <img src={'../../assets/movie.png'} alt='broken movie reel' />
      </section>
    </main>
  )
}

export default Error