import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE } from "./constants";

export function beginning() {
  return (dispatch) => {
    dispatch(getData())
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then((data) => {
        dispatch(gotData(data))
      })
      .catch(err => dispatch(failData(err)))
  }
}


export function getData() {
  return {
    type: FETCHING
  }
}

export function gotData(posts) {
  return {
    type: FETCHING_SUCCESS,
    posts
  }
}

export function failData(err) {
  return {
    type: FETCHING_FAILURE,
    err
  }
}
