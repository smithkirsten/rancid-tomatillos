import dayjs from 'dayjs'

const cleanMovie = (data) => {
  const formattedGenres = !data.genres ? '' : data.genres.length > 1 ? data.genres.join(' | ') : data.genres
  const movieHours = data.runtime / 60
  const movieMinutes = (movieHours - Math.floor(movieHours)) * 60
  const formattedTime = `${Math.floor(movieHours)} hrs ${Math.abs(Math.floor(movieMinutes))} mins`

  return {
    id: data.id,
    title: data.title,
    poster_path: data.poster_path,
    backdrop_path: data.backdrop_path,
    release_date: dayjs(data.release_date).format('MMM D, YYYY'),
    overview: data.overview,
    genres: formattedGenres,
    budget: data.budget || 'unavailable',
    revenue: data.revenue || 'unavailable',
    runtime: formattedTime,
    tagline: data.tagline,
    average_rating: data.average_rating
  }
}

const scrubbingBubbles = (data, destination) => {
  if(destination === 'main') {
    return data
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
  return cleanMovie(data)
  
}

const formatDollars = (raw) => {
  return raw === 'unavailable' ?
    'unavailable for this film':
    ' $' + Intl.NumberFormat().format(raw)
}

export { scrubbingBubbles, formatDollars }