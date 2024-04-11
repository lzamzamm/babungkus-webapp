import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LaporPage() {
    const adminNumber = "628123456789";
    const message = encodeURIComponent(`Halo Admin Babungkus, saya ingin melaporkan\nTanggal Laporan: \nJudul Laporan: \nToko: \nAlasan: `);

    const whatsappLink = `https://wa.me/${adminNumber}?text=${message}`;

    return (
        <div style={{ fontFamily: 'Poppins, sans-serif' }}>
            <Navbar />
            <div className="flex items-center justify-center p-8 hp:pt-[30%] lg:pt-[10%]">
                <div className="w-full rounded border-[0.1px] border-solid border-black p-4 lg:w-[40vw] space-y-4">
                    <div className="border-b-[0.1vmax] border-[#787878] pb-[1vmax] font-semibold lg:text=2xl md:text-xl text-base">
                        Ada Masalah Produk dan Toko? Laporkan Melalui WhatsApp Admin!
                    </div>
                    <form >
                        <div className="pt-[1vmax] hp:text-[1.2vmax]">
                            <div className="">Tanggal Laporan</div>
                            <input
                                type="text"
                                placeholder="11 April 2024"
                                className="h-[3vmax] w-full rounded-[0.3vmax] bg-[#f0f0f0] pl-[0.5vmax] focus:bg-white"
                                disabled
                            ></input>
                        </div>
                        <div className="pt-[1vmax] hp:text-[1.2vmax]">
                            <div className="">Judul Laporan</div>
                            <input
                                type="text"
                                placeholder="Makanann Basi"
                                className="h-[3vmax] w-full rounded-[0.3vmax] bg-[#f0f0f0] pl-[0.5vmax] focus:bg-white"
                                disabled
                            ></input>
                        </div>
                        <div className="pt-[1vmax] hp:text-[1.2vmax]">
                            <div className="">Nama Toko</div>
                            <input
                                type="text"
                                className="h-[3vmax] w-full rounded-[0.3vmax] bg-[#f0f0f0] pl-[0.5vmax] focus:bg-white"
                                placeholder="Babungkus"
                                disabled
                            ></input>
                        </div>
                        <div className="pt-[1vmax] hp:text-[1.2vmax] mb-4">
                            <div className="">Alasan</div>
                            <textarea
                                type="text"
                                className="h-[20vmax] w-full rounded-[0.3vmax] bg-[#f0f0f0] pl-[0.5vmax] focus:bg-white"
                                placeholder="Makanan bakso dari toko ini basi saat saya beli pada tanggal 10 April 2024"
                                disabled
                            ></textarea>
                        </div>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="p-8 px-4 py-2 font-semibold text-white transition duration-300 rounded bg-primary hover:bg-red-700">Laporkan</a>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default LaporPage;