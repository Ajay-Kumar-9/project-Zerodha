import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./landing_page/signup/SignupPage";

import Homepage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import SupportPage from "./landing_page/support/SupportPage";
import ProductsPage from "./landing_page/product/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import NotFound from "./landing_page/NotFound";


import Navbar from "./Navbar";
import Footer from "./Footer";
import "react-toastify/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/*" element={<SignupPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
