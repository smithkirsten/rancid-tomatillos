import React, { Component } from 'react'
import movieData from '../../movieData';
import Header from '../Header/Header'
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
    this.setState({movies: movieData})
  }

  selectMovie = (id) => {
    this.setState({ selectedMovie: id })
  }

  findWorstMovies = () => {
    //this currently returns any movie rated below a 4 and sorts them in order of rating
    return this.state.movies.reduce((worst, movie) => movie.average_rating < 4 && worst.push(movie),[]).sort((a, b) => a.average_rating - b.average_rating)
  }

  render() {
    return(
      <main className='App'>
        <Header />
        <section className="movies-display">
          <Slider movies={} selectMovie={this.selectMovie}/>
          <Slider movies={} selectMovie={this.selectMovie}/>
        </section>
      </main>
    )
  }

}

export default App;
