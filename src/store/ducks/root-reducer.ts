import { combineReducers } from "redux";
import repositories from "./repositories";

const rootreducer = combineReducers({
  repositories,
});

export default rootreducer;
