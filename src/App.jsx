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
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SignOut from "./components/SignOut";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
function App() {
    // Check if the authToken is present before rendering the /dashboard route
  return (
    <div className="w-full mx-auto">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/dashboard"
            element={<DashboardRoutes />}
          />
          <Route
            path="/tax-calculator"
            element={
              <MainLayout>
                <TaxCalculator />
              </MainLayout>
            }
          />
          <Route
            path="/report"
            element={
              <MainLayout>
                <Report />
              </MainLayout>
            }
          />
          <Route
            path="/history"
            element={
              <MainLayout>
                <History />
              </MainLayout>
            }
          />
          <Route
            path="/pay"
            element={
              <MainLayout>
                <Pay />
              </MainLayout>
            }
          />
          <Route
            path="/faq"
            element={
              <MainLayout>
                <Faq />
              </MainLayout>
            }
          />
          <Route
            path="/logout"
            element={
              <MainLayout>
                <SignOut />
              </MainLayout>
            }
          />

            <Route
            path="/profile"
            element={
              <MainLayout>
                <Profile />
              </MainLayout>
            }
          />
          <Route
            path="/update-profile"
            element={
              <MainLayout>
                <UpdateProfile />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function DashboardRoutes() {
    // You can use useNavigate here within the context of Router
    const navigate = useNavigate();
    const authToken = localStorage.getItem('authToken');
  
    useEffect(() => {
        if (!authToken) {
          navigate('/'); // Redirect to another route if authToken is missing
        }
      }, [authToken, navigate]);
  
    return (
      <MainLayout>
        <Summary />
      </MainLayout>
    );
  }

export default App;
