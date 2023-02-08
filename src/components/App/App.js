import React, { Component } from 'react'
import MovieDetails from '../MovieDetails/MovieDetails'
import MainPage from '../MainPage/MainPage'
import Error from '../Error/Error'
import apiCalls from '../../apiCalls'
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: '',
      movies: [],
    }
  }

  componentDidMount = async () => {
    const data = await apiCalls.getMovies('movies')
    data.movies ?
      this.setState({ movies: data.movies.sort((a, b) => a.average_rating - b.average_rating) }) :
      this.setState({ error: data.error })
  }

  findWorstMovies = () => {
    return [this.state.movies.slice(0, 9), this.state.movies.slice(10)]

  }

  render() {
    //do we need exact here now that it's in a switch?
    return (
      <>
      <Switch>
        <Route exact path='/' render={() => <MainPage movies={this.findWorstMovies()[1]} worstMovies={this.findWorstMovies()[0]} error={this.state.error} />} ></Route>
        <Route exact path='/movie/:id' render={(props) => <MovieDetails {...props} allMovies={this.state.movies}/>} ></Route>
        <Route path='/error' render={() => <Error error={this.state.error} />} ></Route>
        <Redirect to='/error'/>
      </Switch>
      </>
    )
  }
}

export default App;
