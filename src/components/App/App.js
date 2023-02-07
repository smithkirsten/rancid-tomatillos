import React, { Component } from 'react'
import MovieDetails from '../MovieDetails/MovieDetails'
import MainPage from '../MainPage/MainPage'
import apiCalls from '../../apiCalls'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: '',
      movies: [],
      selectedMovie: ''
    }
  }

  componentDidMount = async () => {//added a sort so that movies are sorted by rating as soon as they are fetched
    const data = await apiCalls.getMovies('movies')
    console.log(data)
    data.movies ?
      this.setState({ movies: data.movies.sort((a, b) => a.average_rating - b.average_rating) }) :
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
    
    return [this.state.movies.slice(0, 9), this.state.movies.slice(10)]

    // return this.state.movies
    //   .sort((a, b) => a.average_rating - b.average_rating)
    //   .slice(0, 10)
  }

  // determineRender = ({ error, movies, selectedMovie }) => {
  //   if (error) {
  //     return (<p>error</p>)
  //     // <Route path="error" element={<Error />}/>
  //   }
  //   if (selectedMovie) {
  //     console.log('movie selected: ', selectedMovie)
  //     return (
  //       <MovieDetails backToMain={this.backToMain} movieId={this.state.selectedMovie} />
  //     )
  //   }
  //   if (movies.length < 1) {
  //     return (<p>loading...</p>)
  //   } else {
  //     return (
  //       <MainPage movies={this.state.movies} worstMovies={this.findWorstMovies()} selectMovie={this.selectMovie} />
  //     )
  //   }
  // }

  render() {
    return (
      <>
        {/* {this.determineRender(this.state)} */}
        {/* <Route path='movie/:id' component={MovieDetails} ></Route> */}
        {/* <Route path='/main' component={MainPage} ></Route> */}
        {this.state.selectedMovie && <Route exact path='/movie/:id' render={() => <MovieDetails backToMain={this.backToMain} movieId={this.state.selectedMovie} />} ></Route> }
        { this.state.movies.length > 0 && <Route exact path='/' render={() => <MainPage movies={this.findWorstMovies()[1]} worstMovies={this.findWorstMovies()[0]} selectMovie={this.selectMovie} />} ></Route> }
      </>
      // Home page work path to '/main' or else it won't load correctly
    )
  }
}

export default App;
