import React from "react";
import { Routes, Route } from "react-router-dom";
import AddCars from "../Pages/AddCars";

import { CarsDetailpage } from "../Components/CarsDetailpage";
import { AllCars } from "../Pages/AllCars";
import { Login_signupPage } from "./../Pages/Login_signupPage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AllCars />} />
      <Route path="/cars-details" element={<CarsDetailpage />} />
      <Route path="/add-cars" element={<AddCars />} />
      <Route path="/login_signup" element={<Login_signupPage />} />
    </Routes>
  );
}
