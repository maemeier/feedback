import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { render } from "react-snapshot";
import * as serviceWorker from "./serviceWorker";

render(<App />, document.getElementById("root"));

serviceWorker.unregister();
