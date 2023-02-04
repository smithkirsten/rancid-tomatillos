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
  componentDidMount = async(props) => {
    console.log('movie details did mount', this.props.movieId )
    //GET Movie
    const movieDeets = await apiCalls.getMovies('movies', this.props.movieId)
    const videos = await apiCalls.getMovies('videos', this.props.movieId)
    console.log('movie', movieDeets)
    console.log('videos', videos)
    this.setState({ movie: movieDeets.movie, videos: videos })

    // try {
    //   const res = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`)
    //   const data = await res.json() 
    //   this.setState({movie: data.movie})
    // } catch(err) {
    //   console.log(err)
    //   this.setState({ error: err })
    // }
    
    //GET for individual movie details and videos
    //movie will be returned as an object containing 1 "movie" property. Make sure to assign state to data.Movie rather than just the returned data
  }

  componentDidUpdate(props) {
    //GET for individual movie details and videos
    //movie will be returned as an object containing 1 "movie" property. Make sure to assign state to data.Movie rather than just the returned data
  }


  render(props) {
    return (
      <main className="App">
        <MovieHeader backToMain={this.props.backToMain} movie={this.state.movie}/>
        <MovieMain movie={this.state.movie} videos={this.state.videos}/>
      </main>
    )

  }
}

export default MovieDetails