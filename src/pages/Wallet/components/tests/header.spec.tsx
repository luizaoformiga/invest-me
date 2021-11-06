import { render } from "@testing-library/react";
import { HeaderWallet } from "../header";

describe("HeaderWallet", () => {
  test("Deve renderizar o component HeaderWallet", () => {
    render(<HeaderWallet />);
  });
});
