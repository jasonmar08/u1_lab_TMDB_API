const API_KEY = 'ce27f51f725b2747b25ed119f72b3712'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'
const button = document.querySelector('button')
const input = document.querySelector('input')
const listSection = document.querySelector('section')

// eventLister: listening for an event
// eventHandler: function that does something when we hear that specified event

let renderList = (movies) => {
  movies.forEach((movie) => {
    let moviePoster = document.createElement('div')
    moviePoster.innerHTML = `<img src=${IMAGE_BASE_PATH + movie.poster_path} />`

    let movieTitle = document.createElement('h2')
    movieTitle.innerHTML = movie.original_title
    movieTitle.style.color = 'lightgray'

    let hLine = document.createElement('hr')
    hLine.style.width = '500px'

    listSection.appendChild(movieTitle)
    listSection.appendChild(moviePoster)
    listSection.appendChild(hLine)
  })
}

const makeCall = async () => {
  let movie = input.value
  let response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${API_KEY}`
  )

  renderList(response.data.results)
  input.value = ''
}

button.addEventListener('click', makeCall)
