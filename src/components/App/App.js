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
    //call cleaning function here and pass in data.movies
      this.setState({ movies: scrubbingBubbles(data.movies, 'main') }) :
      this.setState({ error: data.error })
  }

  componentDidUpdate = () => {
    if(!this.state.searchInput && this.state.searchedMovies.length) {
      this.setState({searchedMovies: []})
    }
  }

  findWorstMovies = () => {
    return [this.state.movies.slice(0, 10), this.state.movies.slice(10)]

  }

  //Not sure if this is the correct way for using the spread operator
  handleSearch = input => {
    const filteredMovies = this.state.movies.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase()))
    this.setState({ searchInput: input, searchedMovies: filteredMovies })
    // if(!this.state.searchInput) {
    //   this.setState({searchedMovies: []})
    // }
  }

  render() {
    //do we need exact here now that it's in a switch?
    console.log('searchInput', this.state.searchInput)
    return (
      <>
        <Switch>
          <Route exact path='/' render={() => <MainPage movies={this.findWorstMovies()[1]} worstMovies={this.findWorstMovies()[0]} error={this.state.error} handleSearch={this.handleSearch} searchedMovies={this.state.searchedMovies} />} ></Route>
          <Route exact path='/movie/:id' render={(props) => <MovieDetails {...props} allMovies={this.state.movies} />} ></Route>
          <Route path='/error' render={() => <Error error={this.state.error} />} ></Route>
          <Redirect to='/error' />
        </Switch>
      </>
    )
  }
}

export default App;
