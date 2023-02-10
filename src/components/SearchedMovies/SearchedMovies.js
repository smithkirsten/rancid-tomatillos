import React from 'react'

const SearchedMovies = ({ searchedMovies }) => {
  const filteredMovies = searchedMovies.map(movie => <div style={{backgroundImage: movie.poster_path}} className='.filtered-movies'>{movie.title}</div>)
  console.log(filteredMovies)
  return (
    <section>
      {filteredMovies}
    </section>
  )
}

export default SearchedMovies