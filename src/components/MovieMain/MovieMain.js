import './MovieMain.css'

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