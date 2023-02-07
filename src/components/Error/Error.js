import React from 'react'
import './Error.css'
import Header from '../Header/Header'
import broken from '../../assets/movie.png'

const Error = ({ error }) => {
  console.log(error)
  return (
    <main className="App">
      <Header />
      <section className="error-page">
        <div className="error-display">
          <h2>Whoops! We couldn't find what you're looking for</h2>
          <img src={broken} alt='broken movie reel' className="broken-image"/>
        </div>
      </section>
    </main>
  )
}

export default Error