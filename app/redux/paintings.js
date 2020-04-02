/* eslint-disable no-case-declarations */
import axios from "axios";
// ACTION TYPES
const GOT_PAINTINGS = "GOT_PAINTINGS";
const CREATED_PAINTING = "CREATED_PAINTING";
const DELETED_PAINTING = "DELETED_PAINTING";
const UPDATED_PAINTING = "UPDATED_PAINTING";

// ACTION CREATORS
const gotPaintings = paintings => ({
  type: GOT_PAINTINGS,
  paintings
});

const createdPainting = painting => ({
  type: CREATED_PAINTING,
  painting
});

const deletedPainting = paintingId => ({
  type: DELETED_PAINTING,
  paintingId
});

const updatedPainting = painting => ({
  type: UPDATED_PAINTING,
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

export const deletePainting = paintingId => {
  return async dispatch => {
    const res = await axios.delete(`/api/paintings/${paintingId}`);
    dispatch(deletedPainting(res.data));
  };
};

export const updatePainting = (paintingId, info) => {
  return async dispatch => {
    const res = await axios.put(`/api/paintings/${paintingId}`, info);
    dispatch(updatedPainting(res.data));
  };
};
// INITIAL STATE
const initialState = [];

//REDUCER
export default function paintingsReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_PAINTINGS:
      return action.paintings;
    case CREATED_PAINTING:
      return [...state, action.painting];
    case DELETED_PAINTING:
      const filtered = state.filter(
        painting => painting.id !== action.paintingId
      );
      return filtered;
    case UPDATED_PAINTING:
      const updatedPaintings = state.map(painting => {
        if (painting.id === action.painting.id) {
          return action.painting;
        } else {
          return painting;
        }
      });
      return updatedPaintings;
    default:
      return state;
  }
}
