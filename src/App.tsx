import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from "./store";
import { Wallet } from "./pages";
import { Home, Pay } from "./conteiners";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pay" component={Pay} />
          <Route exact path="/" component={Home} />
          <Route exact path="/wallet" component={Wallet} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
