import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../../store";

import { CatalogItem } from "../Catalog-item";

describe("CatalogItem", () => {
  test("Deve renderizar a página CatalogItem", () => {
    render(
      <Provider store={store}>
        <CatalogItem />
      </Provider>
    );
  });
});
