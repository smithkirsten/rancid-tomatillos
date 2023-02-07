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

  displayMovie = async(id) => {
      const movieDeets = await apiCalls.getMovies('movies', id)
      const videos = await apiCalls.getMovies('videos', id)
      this.setState({ movie: movieDeets.movie, videos: videos.videos })
    }
  
  componentDidMount = async() => {
    const id = this.props.match.params.id
    await this.displayMovie(id)
  }

  render() {
    if(this.state.videos < 1 || this.state.movies < 1) {
      return <p>loading</p>
    }
    return (
      <main className="App">
        <MovieHeader movie={this.state.movie}/>
        <MovieMain movie={this.state.movie} videos={this.state.videos}/>
      </main>
    )

  }
}

export default MovieDetails