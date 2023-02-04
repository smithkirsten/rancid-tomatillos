import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      input: ''
    }
  }

  handleChange = ({ value }) => {
    //Use prop object to filter through movies data
    this.setState({input: value})
  }

  render() {
    return(
      <div className='search-container'>
        <label for="searchBar">Search Bar</label>
        <input 
          id='searchBar'
          type='text'
          name='input'
          value={this.state.input}
          placeholder='Search Movies...'
          onChange={(event) => this.handleChange(event)}
        />
      </div>
    )
  }
} 

export default Search