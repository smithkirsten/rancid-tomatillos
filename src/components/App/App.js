import React, { Component } from 'react'
import movieData from '../../movieData';
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      error: '',
      movies: [],
      selectedMovie: ''
    }
  }

  componentDidMount() {
    this.setState({ movies: movieData.movies })
  }

  selectMovie = (id) => {
    this.setState({ selectedMovie: id })
  }

  findWorstMovies = () => {
    return this.state.movies
    .sort((a, b) => a.average_rating - b.average_rating)
    .slice(0, 10)
  }

  render() {
    if(this.state.movies.length < 1) {
      return (<p>loading...</p>)
    } else if (this.state.error) {
      return (<p>error</p>)
    } else if (this.state.selectedMovie) {
      return (<p>you picked a movie!</p>)
    } else {
      return(
        <main className='App'>
          <Header />
          <section className="movies-display">
            <Slider movies={this.findWorstMovies()} selectMovie={this.selectMovie}/>
            <Slider movies={this.state.movies} selectMovie={this.selectMovie}/>
          </section>
        </main>
      )
    }
  }

}

export default App;
