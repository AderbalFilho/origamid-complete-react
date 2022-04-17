import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Header from "./Header";
import NotFound from "./NotFound";
import Products from "./Products";
import Footer from "./Footer";
import "./App.css";
import Product from "./Product";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="contato" element={<Contact />} />
          <Route path="produto/:id" element={<Product />} />
          {/* <Route path="produto/:id" element={<Product />}>
        <Route path="" element={<ProductDescription />} />
        <Route path="avaliacao" element={<ProductReview />} />
        <Route path="customizado" element={<CustomProduct />} />
      </Route> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
