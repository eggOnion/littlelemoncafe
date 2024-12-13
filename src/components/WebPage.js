import React from "react";
import { HashRouter as Router, Route, Routes, HashRouter } from "react-router-dom";

import Header from "./Header";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Booking from "../pages/Booking";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";
import ConfirmBooking from "../pages/ConfirmBooking";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Testimonials from "../pages/Testimonials";

function WebPage() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/littlelemoncafe" element={<Home />} />        
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/orderOnline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking/confirmation" element={<ConfirmBooking />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <MainContent />
      <Footer />
    </HashRouter>
  );
}

export default WebPage;
