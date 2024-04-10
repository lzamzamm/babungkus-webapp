import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashboardNavbar from "../admin/DashboardNav";
import ReportPage from "../admin/Laporan";
import ActionPage from "../admin/Tindakan";
import StoreVerification from "../admin/StoreVerification";
import DetailVerification from "../admin/DetailVerification";

function DashboardPage() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <div>
      <Navbar />
      {isNavVisible && (
        <div
          className="fixed inset-0 z-10 bg-opacity-50"
          onClick={() => setIsNavVisible(false)}
        ></div>
      )}
      <div className="flex min-h-screen flex-col bg-gray-100">
        <div className="mt-10 flex flex-1 md:ml-10 lg:ml-12">
          <DashboardNavbar />
          <div
            className={`mt-10 flex-1 md:p-16 lg:p-16 ${isNavVisible ? "opacity-50" : "opacity-100"}`}
          >
            <div className="rounded-lg bg-white p-4 shadow-md md:mt-6 lg:p-10">
              <Routes>
                <Route path="/" element={<ReportPage />} />
                <Route path="laporan" element={<ReportPage />} />
                <Route path="tindakan" element={<ActionPage />} />
                <Route path="verifikasi" element={<StoreVerification />} />
                <Route path="detailVerif" element={<DetailVerification />} />
              
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
