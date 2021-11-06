import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";

import { Pay } from ".";

describe("Pay", () => {
  test("Deve renderizar a página Pay", () => {
    render(
      <Provider store={store}>
        <Pay loadRequest={() => {}} />
      </Provider>
    );
  });
});
