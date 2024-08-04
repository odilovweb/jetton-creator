// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Polyfill Buffer and process globally
// import { Buffer } from "bif";
// import process from "process";
// window.Buffer = Buffer;
// window.process = process;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
