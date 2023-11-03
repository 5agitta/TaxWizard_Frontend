// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./components/dashboard/MainLayout";
import Summary from "./pages/dashboard/Summary";
import TaxCalculator from "./pages/dashboard/TaxCalculator";
function App() {
  return (
    <div className="w-full mx-auto">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/dashboard"
            element={<MainLayout><Summary/></MainLayout>}
          />
          <Route
            path="/tax-calculator"
            element={<MainLayout><TaxCalculator/></MainLayout>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
