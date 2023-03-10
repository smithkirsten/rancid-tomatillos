import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  constructor() {
    super() 
    this.state = {
      input: ''
    }
  }

  handleChange = (event) => {
    const { value } = event.target
    this.setState({input: value}, () => this.props.handleSearch(this.state.input))
  }

  render() {
    return(
      <div className='search-container'>
        <label htmlFor="searchBar">Search Bar</label>
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