import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { RepositoriesState } from "./ducks/repositories/types";

import rootReducer from "./ducks/root-reducer";
import rootSaga from "./ducks/root-saga";
//import cartReducer from "./ducks/cart/actions";

export interface ApplicationState {
  repositories: RepositoriesState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
