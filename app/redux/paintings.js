import axios from "axios";
// ACTION TYPES
const GOT_PAINTINGS = "GOT_PAINTINGS";
const CREATE_PAINTING = "CREATE_PAINTING";

// ACTION CREATORS
const gotPaintings = paintings => ({
  type: GOT_PAINTINGS,
  paintings
});

const createdPainting = painting => ({
  type: CREATE_PAINTING,
  painting
});

// THUNK CREATORS
export const getPaintings = () => {
  return async dispatch => {
    const res = await axios.get("/api/paintings");
    dispatch(gotPaintings(res.data));
  };
};

export const createPainting = paintingInfo => {
  return async dispatch => {
    const res = await axios.post("/api/paintings", paintingInfo);
    dispatch(createdPainting(res.data));
  };
};
// INITIAL STATE
const initialState = [];

//REDUCER
export default function paintingsReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_PAINTINGS:
      return action.paintings;
    case CREATE_PAINTING:
      return [...state, action.painting];
    default:
      return state;
  }
}
