import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyled } from "./GlobalStyled";
import Router from "./Router";
import Wrap from "./components/Wrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Wrap>
      <Router />
    </Wrap>
  </React.StrictMode>
);
