import { render } from "@testing-library/react";
import { Loading } from ".";

describe("Loading", () => {
  test("Deve renderizar a página Loading", () => {
    render(<Loading />);
  });
});
