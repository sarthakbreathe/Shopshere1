import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/HOme";
import { Register } from "./pages/Register";
import { HomePage } from "./pages/HomePage";
// import SideNavbar from "./pages/Navbar";
import { Admin } from "./pages/Addproduct";
import ProductTable from "./pages/Table";
import { Login } from "./pages/Login";
import {  AddtoCart } from "./pages/Addtocart"
import { BuyNow } from "./pages/Buynow";
import { Profile } from "./pages/Profile";
import { Productdata } from "./pages/Productdata";
import { Shop } from "./pages/Shop";
import AboutPage from "./pages/About";
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
const App = ()=>{
  return <>
  <BrowserRouter>
  {/* <SideNavbar/> */}
  <Routes>
    <Route path="/homepage" element={<Home />} />
    <Route path="/" element={<HomePage />} />
    <Route path="/register" element={<Register />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/producttable" element={<ProductTable />} />
    <Route path="/login" element={<Login />} />
    <Route path="/addtocart" element={<AddtoCart />} />
    <Route path="/buynow" element={<BuyNow/>} />
    <Route path="/shop" element={<Shop/>} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/profile/:id" element={<Profile/>} />
    <Route path="/product/:id" element={<Productdata/>} />
    </Routes>
  </BrowserRouter>
  </>;
};

export default App;
