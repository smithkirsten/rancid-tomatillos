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

  async componentDidMount() {
    try {
      const res = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
		  const data = await res.json() 
      this.setState({movies: data})
    } catch(err) {
      console.log(err)
    }
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
