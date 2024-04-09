import { FaGithub, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import LogoBabungkus from '/assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-white-200 text-center lg:text-left text-neutral-800 border-t-2 border-gray-200">
      <div className="py-9 px-[5%]">
        <div className="flex flex-col lg:flex-row items-start lg:text-justify w-full">
          <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
            <div className="flex justify-center items-center mb-5 flex-col lg:flex-row lg:justify-start gap-4" >
              <img src={LogoBabungkus} alt="Logo Babungkus" style={{ height: '50px' }} />
              <h2 className="text-2xl font-bold ml-3">Babungkus</h2>
            </div>
            <p>
              Temukan hidangan favoritmu dengan harga terbaik dan bergabunglah bersama Babungkus dalam misi kami untuk melindungi bumi. Mari bersama-sama membuat pilihan berkelanjutan untuk merawat rumah kita.
            </p>
            <div className="mt-4">
              <a href="https://github.com/lzamzamm/babungkus-webapp/tree/main/front-end/src" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <FaGithub className="text-xl mr-2" />
                <strong>Github Babungkus</strong>
              </a>
            </div>
          </div>
          <div className="lg:pt-10 w-full lg:w-1/3 text-center items-center lg:items-start lg:text-left lg:pl-12 flex-col flex gap-1">
              <h4 className="text-md font-semibold">Punya pertanyaan?</h4>
              <p>Hubungi kami melalui:</p>
              <a href="mailto:kontak@babungkus.com" className="inline-flex items-center text-primary hover:text-green-500">
                <FaEnvelope className="mr-2" />
                kontak@babungkus.com
              </a>
              <a href="https://wa.me/6281510972178" className="inline-flex items-center text-primary hover:text-green-500">
                <FaWhatsapp className="mr-2" />
                +6281510972178
              </a>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a href="#" className="text-xl"><FaFacebook className="text-[#3b5998]" /></a>
                <a href="#" className="text-xl"><FaInstagram className="text-[#E4405F]" /></a>
                <a href="#" className="text-xl"><FaTwitter className="text-[#1DA1F2]" /></a>
              </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-200 px-[5%] py-4 text-center text-neutral-700">
        Hak Cipta © 2024 Babungkus.&nbsp;
        <a className="text-neutral-800 hover:text-neutral-600" href="/privacy-policy">Kebijakan Privasi</a> |&nbsp;
        <a className="text-neutral-800 hover:text-neutral-600" href="/terms">Syarat & Ketentuan</a>
      </div>
    </footer>
  );
}