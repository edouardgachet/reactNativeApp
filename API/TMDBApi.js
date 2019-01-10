// API/TMDBApi.js

const API_TOKEN = "a7a09ca7f83b05d244da94281a95f13f"; // on stock dans notre constante la clée qui nous a été délivré sur le site

export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function test(a){
  console.log(a)
}
