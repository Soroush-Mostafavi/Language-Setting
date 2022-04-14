import React,{Suspense} from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './i18next';
render(
  <BrowserRouter>
   <Suspense  fallback={(<div>Loading....</div>)}>
    <App />
    </Suspense >
  </BrowserRouter>,
  document.getElementById("root")
);