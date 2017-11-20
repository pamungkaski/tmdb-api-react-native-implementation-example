export const FILM_LIST_REQUEST = 'FILM_LIST_REQUEST'
export const FILM_LIST_RESPONSE = 'FILM_LIST_RESPONSE'
import Axios from 'axios'

// Create  Action
const filmListRequest = (page) => {
  return {
    type: FILM_LIST_REQUEST,
    page
  }
}

const filmListResponse = (response) => {
  return {
    type: FILM_LIST_RESPONSE,
    response: response,
  }
}

export const filmList = (page) => {
  return dispatch => {
    dispatch(filmListRequest(page));
    return Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b83e15027df50325aa48d0cdc5c9bf30&language=en-US&page=${page}`)
      .then((response) => {
        // console.log(response.data.results)
        dispatch(filmListResponse(response.data.results))
      })
  }
}