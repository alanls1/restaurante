import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import LoadingOrder from "../src/components/loadingOrder";

import "./index.scss";
const Index: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/loading/:id" element={<LoadingOrder />} />
    </Routes>
  </Router>
);

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  createRoot(rootElement).render(<Index />);
} else {
  console.error("Root element not found");
}
