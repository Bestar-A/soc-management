import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminHeader from "./components/Admin/AdminHeader";
import AdminFooter from "./components/Admin/AdminFooter";
import AdminSidebar from "./components/Admin/AdminSidebar";


const App = () => {
  const location = useLocation();
  AOS.init();
  return (
    <>
      {location.pathname.includes("admin") ? (
        <>
          <AdminHeader />
          <AdminSidebar />
            <Outlet />
          <AdminFooter />
        </>
      ) : (
        <>
          {(location.pathname === "/login") ^
          (location.pathname === "/signup") ? (
            <Outlet />
          ) : (
            <>
              <Header />
                 <Outlet />
              <Footer />
            </>
          )}
        </>
      )}

      <ToastContainer />
    </>
  );
};

export default App;
