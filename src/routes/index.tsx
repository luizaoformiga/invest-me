import React from "react";
import { Provider } from "react-redux";

import store from "../store";
//import { BrowserRouter } from "react-router-dom";

export const Routes: React.FC = () => {
  return (
    <Provider store={store}>
      
    </Provider>
  );
};
