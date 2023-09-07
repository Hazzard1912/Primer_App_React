import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
// import { FirstApp } from "./FirstApp";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp title="Hola, soy Goku!"/> */}
    <CounterApp value={5} />
  </React.StrictMode>
);
