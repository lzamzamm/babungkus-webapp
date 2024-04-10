import {
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import LogoBabungkus from "/assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white-200 border-t-2 border-gray-200 text-center text-neutral-800 lg:text-left">
      <div className="px-[5%] py-9">
        <div className="flex w-full flex-col items-start lg:flex-row lg:text-justify">
          <div className="mb-6 w-full lg:mb-0 lg:w-2/3">
            <div className="mb-5 flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-start">
              <img
                src={LogoBabungkus}
                alt="Logo Babungkus"
                style={{ height: "50px" }}
              />
              <h2 className="ml-3 text-2xl font-bold">Babungkus</h2>
            </div>
            <p>
              Temukan hidangan favoritmu dengan harga terbaik dan bergabunglah
              bersama Babungkus dalam misi kami untuk melindungi bumi. Mari
              bersama-sama membuat pilihan berkelanjutan untuk merawat rumah
              kita.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/lzamzamm/babungkus-webapp/tree/main/front-end/src"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <FaGithub className="mr-2 text-xl" />
                <strong>Github Babungkus</strong>
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-1 text-center lg:w-1/3 lg:items-start lg:pl-12 lg:pt-10 lg:text-left">
            <h4 className="text-md font-semibold">Punya pertanyaan?</h4>
            <p>Hubungi kami melalui:</p>
            <a
              href="mailto:kontak@babungkus.com"
              className="inline-flex items-center text-primary hover:text-green-500"
            >
              <FaEnvelope className="mr-2" />
              kontak@babungkus.com
            </a>
            <a
              href="https://wa.me/6281510972178"
              className="inline-flex items-center text-primary hover:text-green-500"
            >
              <FaWhatsapp className="mr-2" />
              +6281510972178
            </a>
            <div className="flex justify-center gap-4 lg:justify-start">
              <a href="#" className="text-xl">
                <FaFacebook className="text-[#3b5998]" />
              </a>
              <a href="#" className="text-xl">
                <FaInstagram className="text-[#E4405F]" />
              </a>
              <a href="#" className="text-xl">
                <FaTwitter className="text-[#1DA1F2]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-200 px-[5%] py-4 text-center text-neutral-700">
        Hak Cipta © 2024 Babungkus.&nbsp;
        <a
          className="text-neutral-800 hover:text-neutral-600"
          href="/privacy-policy"
        >
          Kebijakan Privasi
        </a>{" "}
        |&nbsp;
        <a className="text-neutral-800 hover:text-neutral-600" href="/terms">
          Syarat & Ketentuan
        </a>
      </div>
    </footer>
  );
}
