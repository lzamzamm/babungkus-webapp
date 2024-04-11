import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFoundPage() {
    return (
      <div>
        <Navbar />
        <section className="bg-white py-28 font-serif">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="w-full max-w-md text-center">
                <div className="bg-center bg-no-repeat bg-cover h-96" style={{backgroundImage: "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)"}}>
                  <h1 className="text-6xl">404</h1>
                </div>
                <div className="mt-10">
                  <p>Halaman yang kamu cari tidak ditemukan!</p>
                  <a href="/" className="inline-block px-6 py-3 mt-5 rounded-lg text-white bg-primary">Kembali ke Beranda</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  
export default NotFoundPage;