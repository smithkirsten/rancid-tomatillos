import './MovieMain.css'

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

const MovieMain = (props) => {
  const { title, tagline, runtime, genres, poster_path } = props.movie
  const {} = props.videos
  return (
    <section className="movie-info">
      <div className="overview-area">
        <p className="tagline">{tagline}<span className="runtime">{runtime}</span></p>
        <img src={poster_path} alt={title}/>
        <p className="summary">{overview}</p>
      </div>
      <div className="genres">
        <p>{genres}</p>
      </div>
      <Slider />
    </section>
  )
}
//add videos to Slider

export default MovieMain