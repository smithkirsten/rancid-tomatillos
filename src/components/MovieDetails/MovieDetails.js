import './MovieDetails.css'
import React, { Component } from 'react'
import MovieHeader from '../MovieHeader/MovieHeader'
import MovieMain from '../MovieMain/MovieMain'
import apiCalls from '../../apiCalls'

class MovieDetails extends Component {
  constructor(props) {
    super()
    this.state = {
      movie: {},
      videos: [],
      error: ''
    }
  }
  //props are: movie id and backToMain function

  displayMovie = async(prevState) => {
    if(!prevState || prevState.movie.id !== this.state.movie.id) {
      const movieDeets = await apiCalls.getMovies('movies', this.props.movieId)
      const videos = await apiCalls.getMovies('videos', this.props.movieId)
      this.setState({ movie: movieDeets.movie, videos: videos.videos })
    }
  }
  componentDidMount = async() => {
    await this.displayMovie()
  }

  componentDidUpdate = async(prevProps, prevState) => {
    //ask if state has changed and if it has, re-render
    await this.displayMovie(prevState)
  }


  render(props) {
    console.log(this.props)
    return (
      <main className="App">
        <MovieHeader backToMain={this.props.backToMain} movie={this.state.movie}/>
        <MovieMain movie={this.state.movie} videos={this.state.videos}/>
      </main>
    )

  }
}

export default MovieDetails