import { render } from "@testing-library/react";
import { Error } from ".";

describe("Error", () => {
  test("Deve renderizar a página Error", () => {
    render(<Error />);
  });
});
