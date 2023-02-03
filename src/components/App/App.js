import React, { Component } from 'react'
import movieData from '../../movieData';
import Header from '../Header/Header'
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      error: '',
      movies: [],
      selectedMovie: ''
    }
  }

  componentDidMount() {
    this.setState({movies: movieData})
  }

  selectMovie = (id) => {
    this.setState({ selectedMovie: id })
  }

  render() {
    return(
      <main className='App'>
        <Header />
        {  
        //Logo
            //Image

        //Slider
          //worst movies

        //Slider
          //other movies
        }

      </main>
    )
  }

}

export default App;
