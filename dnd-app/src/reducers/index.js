import {
  FETCH_MONSTER_START,
  FETCH_MONSTER_SUCCESS,
  FETCH_MONSTER_FAILURE
} from '../actions'

const initialState = {
  isLoading: false,
  monsters: [],
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_MONSTER_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_MONSTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        monsters: action.payload
      }
    default:
      return state
  }
}