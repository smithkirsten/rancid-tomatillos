

const getMovies = async(path) => {
  let url = `https://rancid-tomatillos.herokuapp.com/api/v2/${path}`

  try {
    const response = await fetch(url)
    const data = await response.json() 
    return data
  } catch(error) {
    console.log(error)
    return error
  }
}

export { getMovies }