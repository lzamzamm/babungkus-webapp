import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardNavbar from '../admin/DashboardNav';
import ReportPage from '../admin/Laporan';
import ActionPage from '../admin/Tindakan';
//import HistoryReport from '../admin/HistoryLaporan';
import StoreVerification from '../admin/StoreVerification';

function DashboardPage() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <div>
      <Navbar />
      {isNavVisible && (
        <div className="fixed inset-0 bg-opacity-50 z-10" onClick={() => setIsNavVisible(false)}></div>
      )}
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="flex flex-1 md:ml-10 lg:ml-12 mt-10">
          <DashboardNavbar />
          <div className={`flex-1 md:p-16 lg:p-16 mt-10 ${isNavVisible ? 'opacity-50' : 'opacity-100'}`}>
            <div className="bg-white shadow-md rounded-lg lg:p-10 p-4 md:mt-6">
              <Routes>
                <Route path='/' element={<ReportPage />} />
                <Route path='laporan' element={<ReportPage />} />
                <Route path='tindakan' element={<ActionPage />} />
                <Route path='verifikasi' element={<StoreVerification />} />
                {/* <Route path='histori' element={<HistoryReport />} /> */}
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
