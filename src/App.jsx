import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/pages/Products";
import ProductsDetails from "./components/pages/ProductsDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
