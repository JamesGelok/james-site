import "./fonts.css";

import App from "./App";
import React from "react";
import { render } from "react-dom";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
