import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CarsContext from "./Context/carsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CarsContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CarsContext>
);
