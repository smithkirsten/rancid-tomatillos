import React, { Component } from 'react'
import MovieDetails from '../MovieDetails/MovieDetails'
import MainPage from '../MainPage/MainPage'
import Error from '../Error/Error'
import { getMovies } from '../../apiCalls'
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: '',
      movies: [],
      searchInput: '',
    }
  }

  componentDidMount = async () => {
    const data = await getMovies('movies')
    data.movies ?
      this.setState({ movies: data.movies.sort((a, b) => a.average_rating - b.average_rating) }) :
      this.setState({ error: data.error })
  }

  findWorstMovies = () => {
    return [this.state.movies.slice(0, 10), this.state.movies.slice(10)]
  }

  //Not sure if this is the correct way for using the spread operator
  handleSearch = input => {
    console.log(input)
    this.setState({ searchInput: input, ...this.state })
    const filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase()))
    console.log(filteredMovies)
  }

  render() {
    //do we need exact here now that it's in a switch?
    return (
      <>
        <Switch>
          <Route exact path='/' render={() => <MainPage movies={this.findWorstMovies()[1]} worstMovies={this.findWorstMovies()[0]} error={this.state.error} handleSearch={this.handleSearch} />} ></Route>
          <Route exact path='/movie/:id' render={(props) => <MovieDetails {...props} allMovies={this.state.movies} />} ></Route>
          <Route path='/error' render={() => <Error error={this.state.error} />} ></Route>
          <Redirect to='/error' />
        </Switch>
      </>
    )
  }
}

export default App;
