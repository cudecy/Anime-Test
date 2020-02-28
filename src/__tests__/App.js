import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("app renders and shows the header text", () => {
  render(<App />);

  expect(screen.getByText("Anime Characters App")).toBeTruthy();
});
