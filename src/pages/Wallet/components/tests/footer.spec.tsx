import { render } from "@testing-library/react";
import { FooterWallet } from "../footer";

describe("FooterWallet", () => {
  test("Deve renderizar o component FooterWallet", () => {
    render(<FooterWallet />);
  });
});
