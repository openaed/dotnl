import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Fonts
import "./fonts/OpenSans/OpenSans-Regular.ttf";
import "./fonts/OpenSans/OpenSans-Bold.ttf";
import "./fonts/OpenSans/OpenSans-Italic.ttf";

// Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
