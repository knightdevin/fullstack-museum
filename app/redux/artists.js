// will need to import axios...
import axios from 'axios';

// action types go here:
const GOT_ARTISTS = 'GOT_ARTISTS';

// action creators go here:
const gotArtists = (artists) => {
  return {
    type: GOT_ARTISTS,
    artists: artists,
  };
};

// thunk creators below (remember, this returns an async function!)
export const getArtists = () => {
  // get all the artists
  return async (dispatch) => {
    const res = await axios.get('/api/artists');
    dispatch(gotArtists(res.data));
  };
};

// initial state:
const initialState = [];

// reducer here:
export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_ARTISTS:
      return action.artists;
    default:
      return state;
  }
}
