import { FaGithub, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import LogoBabungkus from '/assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-white-200 text-center text-neutral-800 border-t-2 border-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 py-9" style={{ maxWidth: '1140px', width: '100%' }}>
        <div className="flex justify-center items-center mb-5 flex-col lg:flex-row lg:justify-start" style={{ gap: '1rem', width: '100%' }} >
          <img src={LogoBabungkus} alt="Logo Babungkus" style={{ height: '50px' }} />
          <h2 className="text-2xl ml-3" style={{ fontWeight: 700 }}>Babungkus</h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start w-full">
          <div className="w-full lg:w-2/3 px-4 mb-6 lg:mb-0">
            <p>
              Temukan hidangan favoritmu dengan harga terbaik dan bergabunglah bersama Babungkus dalam misi kita untuk melindungi bumi. Mari bersama-sama membuat pilihan berkelanjutan untuk menjaga rumah kita.
            </p>
            <div className="mt-4">
              <a href="https://github.com/lzamzamm/babungkus-webapp/tree/main/front-end/src" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <FaGithub className="text-xl mr-2" />
                <strong>Github Babungkus</strong>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4 flex flex-col sm:flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start">
            <div className="text-center lg:text-left">
              <h4 className="text-md font-semibold">Punya pertanyaan?</h4>
              <p>Hubungi kami melalui:</p>
              <a href="mailto:kontak@babungkus.com" className="inline-flex items-center justify-center text-primary hover:text-green-500">
                <FaEnvelope className="mr-2" />
                kontak@babungkus.com
              </a>
              <br></br>
              <a href="https://wa.me/6281510972178" className="inline-flex items-center justify-center text-primary hover:text-green-500">
                <FaWhatsapp className="mr-2" />
                +6281510972178
              </a>
            </div>
            <div className="flex gap-4 mt-4 lg:mt-0 justify-center lg:justify-end">
              <a href="#" className="text-xl"><FaFacebook className="text-[#3b5998]" /></a>
              <a href="#" className="text-xl"><FaInstagram className="text-[#E4405F]" /></a>
              <a href="#" className="text-xl"><FaTwitter className="text-[#1DA1F2]" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-200 p-4 text-center text-neutral-700">
        © 2024 Babungkus. Hak Cipta.
        <a className="text-neutral-800 hover:text-neutral-600" href="/privacy-policy">Privacy Policy</a> |
        <a className="text-neutral-800 hover:text-neutral-600" href="/terms">Syarat & Ketentuan</a>
      </div>
    </footer>
  );
}