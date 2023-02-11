import React, { Component } from 'react'
import MovieDetails from '../MovieDetails/MovieDetails'
import MainPage from '../MainPage/MainPage'
import Error from '../Error/Error'
import { getMovies } from '../../apiCalls'
import { scrubbingBubbles } from '../../util'
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: '',
      movies: [],
      searchInput: '',
      searchedMovies: [],
    }
  }

  componentDidMount = async () => {
    const data = await getMovies('movies')
    data.movies ?
      this.setState({ movies: scrubbingBubbles(data.movies, 'main') }) :
      this.setState({ error: data.error })
  }

  findWorstMovies = () => {
    return [this.state.movies.slice(0, 10), this.state.movies.slice(10)]
  }

  handleSearch = input => {
    const filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase()))
    this.setState({ searchInput: input, searchedMovies: filteredMovies })
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' render={() => <MainPage movies={this.findWorstMovies()[1]} worstMovies={this.findWorstMovies()[0]} error={this.state.error} handleSearch={this.handleSearch} searchedMovies={this.state.searchedMovies} searchInput={this.state.searchInput} />} ></Route>
          <Route exact path='/movie/:id' render={(props) => <MovieDetails {...props} allMovies={this.state.movies} />} ></Route>
          <Route path='/error' render={() => <Error error={this.state.error} />} ></Route>
          <Redirect to='/error' />
        </Switch>
      </>
    )
  }
}

export default App;
