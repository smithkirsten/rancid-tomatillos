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
    }
  }

  componentDidMount = async () => {//added a sort so that movies are sorted by rating as soon as they are fetched
    const data = await apiCalls.getMovies('movies')
    console.log(data)
    data.movies ?
      this.setState({ movies: data.movies.sort((a, b) => a.average_rating - b.average_rating) }) :
      this.setState({ error: data.error })
  }

  findWorstMovies = () => {
    return [this.state.movies.slice(0, 9), this.state.movies.slice(10)]

  }

  render() {
    //add conditional rendering for error and loading
    return (
      <>
      <Switch>
        <Route exact path='/movie/:id' render={(props) => <MovieDetails {...props}/>} ></Route>
        <Route exact path='/' render={() => <MainPage movies={this.findWorstMovies()[1]} worstMovies={this.findWorstMovies()[0]} selectMovie={this.selectMovie} />} ></Route>
      </Switch>
      </>
    )
  }
}

export default App;
