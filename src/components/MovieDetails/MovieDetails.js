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
  componentDidMount(props) {
    //GET in componentdidmount
  }
  componentDidUpdate(props) {
    //GET in subsequent updates to state
  }

  render(props) {
    return (
      <main className="App">
        <MovieHeader />
        <MovieMain />
      </main>
    )

  }
}

{/* <MovieHeader goBack={this.backToMain} movie={selectedMovie}/> 
<MovieMain movie={selectedMovie}/> */}

export default MovieDetails