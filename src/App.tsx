import React from "react";
import { Provider } from "react-redux";

import { GlobalCSS } from "./styles/global";
import store from "./store";
import { Routes } from "./routes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalCSS />
    </Provider>
  );
};

export default App;
