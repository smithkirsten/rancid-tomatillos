import './MovieDetails.css'
import React, { Component } from 'react'
import MovieHeader from '../MovieHeader/MovieHeader'
import MovieMain from '../MovieMain/MovieMain'

class MovieDetails extends Component {
  constructor(props) {
    super()
    this.state = {
      movie: {
        id: 1, 
        title: "Fake Movie Title", 
        poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
        backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
        release_date: "2019-12-04", 
        overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
        average_rating: 6, 
        genres: ["Drama"], 
        budget:63000000, 
        revenue:100853753, 
        runtime:139, 
        tagline: "It's a movie!" 
      }
      ,
      error: ''
    }
  }
  //props are: movie id and backToMain function
  componentDidMount({ movieId }) {
    //GET for individual movie details and videos
    //movie will be returned as an object containing 1 "movie" property. Make sure to assign state to data.Movie rather than just the returned data
  }
  componentDidUpdate({ movieId }) {
    //GET for individual movie details and videos
    //movie will be returned as an object containing 1 "movie" property. Make sure to assign state to data.Movie rather than just the returned data
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