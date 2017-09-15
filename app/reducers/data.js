import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE } from "../constants";

const initialState = {
  posts: [],
  isFetching: false,
  error: false
};

export default function postReducer(state = initialState, action){
  switch(action.type){
    case FETCHING:
      return {
        ...state,
        isFetching: true,
        posts: []
      }
    case FETCHING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.posts
      }
    case FETCHING_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state;
  }
}
