import React, { Component } from 'react'
import MovieHeader from '../MovieHeader/MovieHeader'
import MovieMain from '../MovieMain/MovieMain'
import Error from '../Error/Error'
import Loading from '../Loading/Loading'
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
      return <Loading error='loading' />
    }

    if(!this.props.allMovies.find(movie => movie.id === +this.props.match.params.id)) {
      return (<Error error='no such movie id' />)
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