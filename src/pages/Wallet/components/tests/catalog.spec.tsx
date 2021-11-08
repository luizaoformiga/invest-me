import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../store";

import { Catalog } from "../catalog";

describe("Catalog", () => {
  test("Deve renderizar a página Catalog", () => {
    render(
      <Provider store={store}>
        <Catalog />
      </Provider>
    );
  });
});
