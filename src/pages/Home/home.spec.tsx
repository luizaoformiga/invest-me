import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";

import Home from ".";

describe("Home", () => {
  test("Deve renderizar a página Home", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });
});
