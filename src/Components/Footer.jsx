import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className="bg-black">
      <div className="border-t">
        <footer className="footer container mx-auto p-10  text-white">
          <aside>
          <div className="flex justify-center items-center gap-4">
            <img src="logo.png" alt="logo" className="h-10 w-10" />
            <h1 className="font-bold text-2xl text-white">TableMingle</h1>
          </div>
            <p>
              Experience culinary bliss with every visit <br /> to TableMingle. 
              Our dedication to flavor, service, <br /> and ambiance ensures each
              moment is a delectable delight.
            </p>
            <div className="flex text-3xl  gap-5 items-center mt-2">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </aside>
          <nav>
            <h6 className="footer-title">HELPFUL LINKS</h6>
            <a className="link link-hover">Treams & Conditions</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Shipping Policy</a>
            <a className="link link-hover">Product</a>
          </nav>
          <nav>
            <h6 className="footer-title">SUPPORT</h6>
            <a className="link link-hover">Help</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">About us</a>
          </nav>
          <nav>
            <h6 className="footer-title">CUSTOMER SERVICES</h6>
            <a className="link link-hover"><p className="flex items-center gap-3">
          <IoMdCall />
          +88 01533 333 333
        </p></a>
            <a className="link link-hover"> <p className="flex items-center gap-3">
          <MdEmail />
          info@gmail.com
        </p></a>
            <a className="link link-hover"> <p className="flex items-center gap-3">
          <FaLocationDot />
          72, Wall street, King Road, Dhaka
        </p></a>
          </nav>
        </footer>
        <aside className="text-white border-t py-2 text-center">
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
