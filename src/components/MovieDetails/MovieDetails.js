import './MovieDetails.css'
import React, { Component } from 'react'
import MovieHeader from '../MovieHeader/MovieHeader'
import MovieMain from '../MovieMain/MovieMain'

class MovieDetails extends Component {
  constructor(props) {
    super()
    this.state = {
      movie: {},
      error: ''
    }
  }
  //props are: movie id and backToMain function
  componentDidMount({ movieId }) {
    //GET for individual movie details and videos
  }
  componentDidUpdate({ movieId }) {
    //GET for individual movie details and videos
  }


  render(props) {
    return (
      <main className="App">
        <MovieHeader backToMain={this.props.backToMain} movie={this.props.movie}/>
        <MovieMain move={this.props.movie}/>
      </main>
    )

  }
}

export default MovieDetails