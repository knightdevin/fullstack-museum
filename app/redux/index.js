import { combineReducers } from "redux";
import paintingsReducer from "./paintings";

const appReducer = combineReducers({
  paintings: paintingsReducer
});

export default appReducer;
