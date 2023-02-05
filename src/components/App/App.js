import React, { Component } from 'react'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import MovieDetails from '../MovieDetails/MovieDetails'
import './App.css';
import apiCalls from '../../apiCalls'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      error: '',
      movies: [],
      selectedMovie: ''
    }
  }

  componentDidMount = async() => {
    const data = await apiCalls.getMovies('movies')
    console.log(data)
    data.movies ? 
      this.setState({ movies: data.movies }) :
      this.setState({ error: data.error })
  }

  selectMovie = (id) => {
    this.setState({ selectedMovie: id })
  }

  backToMain = () => {
    console.log('back to main!')
    this.setState({ selectedMovie: '' })
  }

  findWorstMovies = () => {
    return this.state.movies
    .sort((a, b) => a.average_rating - b.average_rating)
    .slice(0, 10)
  }

  determineRender = ({ error, movies, selectedMovie }) => {
    if(error) {
      return (<p>error</p>)
    } 
    if(selectedMovie) {
      console.log('movie selected: ', selectedMovie)
      return (
          <MovieDetails backToMain={this.backToMain} movieId={this.state.selectedMovie} />
      )
    }
    if(movies.length < 1) {
      return (<p>loading...</p>)
    } else {
      return(
        <main className='App'>
          <Header />
          <section className="movies-display">
            <Slider sectionTitle={'Worst Rated Movies'} movies={this.findWorstMovies()} scroll={false} selectMovie={this.selectMovie}/>
            <Slider sectionTitle={'All Movies'} movies={this.state.movies} scroll={true} selectMovie={this.selectMovie}/>
          </section>
        </main>
      )
    }
  }
  render() {
    return this.determineRender(this.state)
  }
}

export default App;
