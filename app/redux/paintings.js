//import axios since we're getting info from our database
import axios from 'axios';

// ACTION TYPES
const GOT_PAINTINGS = 'GOT_PAINTINGS';

// ACTION CREATORS
const gotPaintings = (paintings) => {
  return {
    type: GOT_PAINTINGS,
    paintings: paintings,
  };
};

// THUNK CREATORS (don't forget to export the thunks!)
export const getPaintings = () => {
  // get the patintings
  return async (dispatch) => {
    const res = await axios.get('/api/paintings');
    dispatch(gotPaintings(res.data));
  };
};

// INITIAL STATE
const initialState = [];

//REDUCER
export default function paintingsReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_PAINTINGS:
      return action.paintings;
    default:
      return state;
  }
}
