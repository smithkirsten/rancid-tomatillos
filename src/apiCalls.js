

const getMovies = async() => {
  try {
    const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    const data = await response.json() 
    return data
  } catch(error) {
    console.log(error)
    return error
  }
}

export default getMovies