

const getMovies = async(type, id) => {
  let url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'

  if(id) {
    url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  } 
  if (type === 'videos') {
    url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/${type}`
  }
  
  try {
    const response = await fetch(url)
    const data = await response.json() 
    return data
  } catch(error) {
    console.log(error)
    return error
  }
}

export default { getMovies }