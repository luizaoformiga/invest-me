import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route,  } from "react-router-dom";

import { GlobalCSS } from "./styles/global";

import { Home, Wallet, Pay } from "./pages";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Wallet />
      <GlobalCSS />
    </Provider>
  );
};

/*
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pay" component={Pay} />
          <Route exact path="/wallet" component={Wallet} />
        </Switch>
      </BrowserRouter>
    </Provider>
*/

export default App;
