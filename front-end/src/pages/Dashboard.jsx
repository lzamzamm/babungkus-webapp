import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardNavbar from '../admin/DashboardNav';
import ReportPage from '../admin/Laporan';
import ActionPage from '../admin/Tindakan';
import ActionHistoryPage from '../admin/HistoryLaporan';
import StoreVerfication from '../components/StoreVerification';

function DashboardPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gray-100"> {/* Memberikan latar belakang abu-abu untuk keseluruhan halaman */}
        <div className="flex flex-1 ml-10">
          <DashboardNavbar />
          <div className="flex-1 p-16"> 
          <div className="bg-white shadow-md rounded-lg p-10 mr-10"> 
            <Routes>
              <Route path='/' element={<ReportPage />} />
              <Route path='laporan' element={<ReportPage />} />
              <Route path='tindakan' element={<ActionPage />} />
              <Route path='riwayat' element={<ActionHistoryPage />} />
              <Route path='verifikasi' element={<StoreVerfication/>} />
              <Route path='detail-verifikasi' element={<StoreVerfication/>} />
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
