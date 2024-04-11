import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashboardNavbar from "../admin/DashboardNav";
import ReportPage from "../admin/Laporan";
import ActionPage from "../admin/Tindakan";
import StoreVerification from "../admin/StoreVerification";

function DashboardPage() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <>
    <Navbar />
      <div className="flex min-h-screen flex-col bg-gray-100">
        <div className="mt-10 flex flex-1 md:ml-10 lg:ml-12">
          <DashboardNavbar 
            isNavVisible={isNavVisible}
            setIsNavVisible={setIsNavVisible}
          />
          <div
            className={`mt-10 flex-1 md:p-16 lg:p-16 ${isNavVisible ? "opacity-50" : "opacity-100"}`}
          >
            <div className="rounded-lg bg-white p-2 shadow-md md:mt-6 lg:p-10">
              <Routes>
                <Route path="/" element={<ReportPage />} />
                <Route path="laporan" element={<ReportPage />} />
                <Route path="tindakan" element={<ActionPage />} />
                <Route path="verifikasi" element={<StoreVerification />} />            
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DashboardPage;
