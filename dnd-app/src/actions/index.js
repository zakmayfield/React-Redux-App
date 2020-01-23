import axios from 'axios';

//action types
export const FETCH_MONSTER_START = 'FETCH_MONSTER_START';
export const FETCH_MONSTER_SUCCESS = 'FETCH_MONSTER_SUCCESS';
export const FETCH_MONSTER_FAILURE = 'FETCH_MONSTER_FAILURE';

export const fetchMonsters = () => {
  return dispatch => {
    dispatch({ 
      type: FETCH_MONSTER_START 
    })
    axios.get('https://api.open5e.com/monsters/?limit=100')
      .then(res => {
        dispatch({
          type: FETCH_MONSTER_SUCCESS,
          payload: res.data.results
        })
      })
      .catch(err => {
        console.log('error message', err)
        dispatch({
          type: FETCH_MONSTER_FAILURE,
          payload: err
        })
      })
  }
}