// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./components/dashboard/MainLayout";
import Summary from "./pages/dashboard/Summary";
import TaxCalculator from "./pages/dashboard/TaxCalculator";
import Report from "./pages/dashboard/Report";
import History from "./pages/dashboard/History";
import Faq from "./pages/dashboard/Faq";
import Pay from "./pages/dashboard/Pay";
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
          <Route
            path="/report"
            element={<MainLayout><Report/></MainLayout>}
          />
          <Route
            path="/history"
            element={<MainLayout><History/></MainLayout>}
          />
          <Route
            path="/return"
            element={<MainLayout><Pay/></MainLayout>}
          />
          <Route
            path="/faq"
            element={<MainLayout><Faq/></MainLayout>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
