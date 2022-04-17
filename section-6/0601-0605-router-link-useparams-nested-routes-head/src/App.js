import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import NotFound from "./NotFound";
import Login from "./Login";
import Product from "./Product";
import CustomProduct from "./CustomProduct";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id" element={<Product />}>
          <Route path="" element={<ProductDescription />} />
          <Route path="avaliacao" element={<ProductReview />} />
          <Route path="customizado" element={<CustomProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
