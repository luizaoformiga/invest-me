import { combineReducers } from "redux";
import repositories from "./repositories";
import cart from "../cart/reducer";

const rootReducer = combineReducers({
  repositories,
  cart,
});

export default rootReducer;
