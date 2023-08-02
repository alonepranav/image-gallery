import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Image from "./Image";
import Home from "./Home";
import Footer from "./Footer";

export default function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <div className="Ap">
        <BrowserRouter>
          <Routes>
            <Route
              path="/" element={<Home {...{ photos: data, setPhotos: setData }} />}
            />
            <Route
              path="/image/:id"
              element={<Image photos={data} />}
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}
