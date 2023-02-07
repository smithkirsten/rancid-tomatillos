import React from 'react'
import './Error.css'
import Header from '../Header/Header'

const Error = ({ error }) => {
  console.log(error)
  return (
    <main className="App">
      <Header />
      <section className="error-display">
        <h2>Whoops! We couldn't find what you're looking for</h2>
      </section>
    </main>
  )
}

export default Error