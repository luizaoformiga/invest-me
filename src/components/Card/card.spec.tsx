import { render } from "@testing-library/react";

import { Card } from ".";

describe("Card", () => {
  test("Deve renderizar o component Card", () => {
    render(<Card />);
  });
});
