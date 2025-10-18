// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";     // <= remplace "@/index.css"
import App from "./App";  // <= remplace "@/App"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
