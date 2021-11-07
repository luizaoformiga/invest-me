import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import { RepositoriesState } from "./ducks/repositories/types";

import rootReducer from "./ducks/root-reducer";
import rootSaga from "./ducks/root-saga";

export interface ApplicationState {
  repositories: RepositoriesState;
}

export type Application = ApplicationState;

const sagaMiddleware = createSagaMiddleware();

const store: Store<Application, AnyAction> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
