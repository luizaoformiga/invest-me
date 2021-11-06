import { render } from "@testing-library/react";
import { MainPay } from "../main";

describe("MainPay", () => {
  test("Deve renderizar o component MainPay", () => {
    render(<MainPay />);
  });
});
