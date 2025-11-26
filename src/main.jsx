import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // إذا تستخدم React Router

import "./index.css"; // أي CSS عام للتطبيق

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* فقط إذا تستخدم الـ Router */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
