import { FaClock, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <section className="container mx-auto text-white mt-10">

        <div>
            <h1 className="font-bold text-4xl text-center ">Contact Us</h1>
            <div className="bg-red-500 pt-1 w-20 mx-auto mt-5"></div>
        </div>
        <div className="flex  gap-10 mt-10 pb-5">
        <div className="flex-1 h-full space-y-4 "  data-aos="fade-right"
            data-aos-duration="500">
        <div className="flex gap-5 ">
          <div className="flex-1">
            <label className="font-medium text-lg">First Name</label>
            <br />
            <input
              type="text"
              className="w-full h-12 rounded-lg bg-[#191919] pl-5 mt-2"
              placeholder="Enter Your First Name"
            />
          </div>

          <div className="flex-1">
            <label className="font-medium text-lg">Last Name</label>
            <br />
            <input
              type="text"
              className="w-full h-12 rounded-lg bg-[#191919] pl-5 mt-2"
              placeholder="Enter Your Last Name"
            />
          </div>
        </div>
        <div>
          <label className="font-medium text-lg">Last Name</label>
          <br />
          <input
            type="email"
            className="w-full h-12 rounded-lg bg-[#191919] pl-5 mt-2"
            placeholder="Enter Your Email"
          />
        </div>
        <div>
          <label className="font-medium text-lg">Your Massage</label>
          <br />
          <textarea
            className="w-full bg-[#191919] h-28 rounded-lg pl-5 mt-2 pt-2"
            placeholder="Write Your Massage"
          ></textarea>
        </div>
        <button className=" bg-red-500 w-full h-12 rounded-lg">Send Massage</button>
      </div>
      <div className="relative flex-1"  data-aos="fade-left"
            data-aos-delay="500">
        <div className="top-10 absolute w-full">
          <img
            className="opacity-10 h-[380px] w-full rounded-lg"
            src="https://www.foodandwine.com/thmb/3kzG4PWOAgZIIfZwMBLKqoTkaGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/margherita-pizza-with-argula-and-prosciutto-FT-RECIPE0721-04368ec288a84d2e997573aca0001d98.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-center  gap-8  top-1/2 absolute w-full">
          <div
            className="flex flex-col justify-center items-center gap-1"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <FaClock className="text-[#E04444] text-2xl" />
            <h1 className="font-medium text-lg text-white">
              Delivery with 10.00 to 19.00
            </h1>
            <h1 className="font-medium  text-gray-400">OPENING HOURS</h1>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-1"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <FaLocationArrow className="text-[#E04444] text-2xl" />
            <h1 className="font-medium text-lg text-white">Dhaka -1206</h1>
            <h1 className="font-medium  text-gray-400">NEAREST CAFE</h1>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-1"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <FaPhoneAlt className="text-[#E04444] text-2xl" />
            <h1 className="font-medium text-lg text-white">+880 567894343</h1>
            <h1 className="font-medium  text-gray-400">PHONE NUMBER</h1>
          </div>
        </div>
      </div>

        </div>
      
      
    </section>
  );
};

export default Contact;
