import React, { Component } from 'react'
import spinner from '../../assets/Spinner.gif'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'

//if loading MainPage, load dummy slides
//if loading MovieDetails, load spinner
const Loading = () => {
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