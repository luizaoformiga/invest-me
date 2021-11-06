import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";

import Wallet from ".";

describe("Wallet", () => {
  test("Deve renderizar a página Wallet", () => {
    render(
      <Provider store={store}>
        <Wallet />
      </Provider>
    );
  });
});
