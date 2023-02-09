const scrubbingBubbles = (data, destination) => {
  if(destination === 'main') {
    return movies = data
      .map(movie => {
        return {
          id: movie.id,
          poster_path: movie.poster_path,
          title: movie.title,
          average_rating: movie.average_rating
        }
      })
      .sort((a, b) => a.average_rating - b.average_rating)
  }
  return {
    
  }
  //change budget & revenue from 0 -> unavailable? but then we will have to mess with the conditional rendering
}

const formatDollars = (raw) => {
  return raw === 'unavailable' ?
    raw + ' for this film':
    '$' + Intl.NumberFormat().format(raw)
}

export { scrubbingBubbles, formatDollars }