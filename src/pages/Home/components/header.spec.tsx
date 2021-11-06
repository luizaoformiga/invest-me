import { render } from "@testing-library/react";
import { HeaderHome } from "./header";

describe("HeaderHome", () => {
  test("Deve renderizar o component HeaderHome", () => {
    render(<HeaderHome />);
  });
});
