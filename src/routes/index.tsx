import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Pay, Wallet } from "../conteiners";
import { Cart } from "../conteiners";
//import { Error } from "../helper";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pay" component={Pay} />
        <Route exact path="/wallet" component={Wallet} />
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
