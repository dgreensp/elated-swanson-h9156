import * as React from "react";
import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);

export class Square {
  // Previously: implicit any!
  // Now: inferred to `number`!
  area;
  sideLength;

  constructor(sideLength: number) {
    this.sideLength = "foo";
    this.area = sideLength ** 2;
  }
}
