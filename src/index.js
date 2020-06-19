import "./fonts.css";
import "./underline.css";

import App from "./App";
import React from "react";
import { render } from "react-dom";

const MOUNT_NODE = document.getElementById("root");

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  MOUNT_NODE
);
