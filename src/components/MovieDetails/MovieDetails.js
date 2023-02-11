import React, { Component } from 'react'
import MovieHeader from '../MovieHeader/MovieHeader'
import MovieMain from '../MovieMain/MovieMain'
import Error from '../Error/Error'
import Loading from '../Loading/Loading'
import { getMovies } from '../../apiCalls'
import { scrubbingBubbles } from '../../util'

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
      const movieDeets = await getMovies('movies', id)
      const videos = await getMovies('videos', id)
      movieDeets.movie ?
      this.setState({ movie: scrubbingBubbles(movieDeets.movie, 'details'), videos: videos.videos }) :
      this.setState({ error: movieDeets.error })
    }
    
    componentDidMount = async() => {
      const id = this.props.match.params.id
      await this.displayMovie(id)
    }
    
    render() {
      if(!this.props.allMovies.find(movie => movie.id === +this.props.match.params.id)) {
        return (<Error error='no such movie id' />)
      }
      
      if(!this.state.movie.title) {
        return <Loading error='loading' />
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