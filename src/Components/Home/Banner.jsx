import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import { FaClock, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <section className="bg-[#000002] h-[120vh] md:h-[60vh] lg:h-[80vh] relative ">
      <div className=" bg-[url(https://www.transparentpng.com/download/food/24BoOY-food-fruits-free-cut-out.png)] opacity-25 bg-no-repeat bg-right-top h-full">
        {/* container  */}
      </div>
      <div className="container mx-auto">
        <div className="flex  flex-col md:flex-row lg:flex-row h-full  mx-auto items-center lg:gap-40 absolute top-0 p-10 lg:p-0">
          <div className="h-full flex flex-col justify-center lg:w-[55%] md:w-[70%] gap-8">
            <h1
              className="text-3xl lg:text-5xl text-white font-bold "
              data-aos="fade-right"
              data-aos-delay="500"
            >
              Revolutionize Your <br /> Restaurant Experience: <br />
              <span className="text-red-500">
                <Typewriter
                  words={[
                    "Effortless Management",
                    "Seamless Operations",
                    "Enhanced Efficiency",
                    "Maximized Productivity",
                    "Optimized Service",
                  ]}
                  loop={Infinity}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p
              className="text-white "
              data-aos="fade-right"
              data-aos-delay="600"
            >
              Welcome to our restaurant management system, where innovation
              meets efficiency. With our intuitive platform, you can streamline
              every aspect of your restaurants operations, from managing
              reservations to tracking inventory and optimizing staffing. Say
              goodbye to manual processes and hello to seamless automation. Let
              us handle the complexities while you focus on delivering
              exceptional dining experiences to your guests. Join us in
              revolutionizing the way you run your restaurant
            </p>
            <div className="flex justify-between">
              <div
                className="flex flex-col justify-center items-center gap-1"
                data-aos="fade-up"
                data-aos-delay="700"
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
                data-aos-delay="800"
              >
                <FaLocationArrow className="text-[#E04444] text-2xl" />
                <h1 className="font-medium text-lg text-white">Dhaka -1206</h1>
                <h1 className="font-medium  text-gray-400">NEAREST CAFE</h1>
              </div>
              <div
                className="flex flex-col justify-center items-center gap-1"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <FaPhoneAlt className="text-[#E04444] text-2xl" />
                <h1 className="font-medium text-lg text-white">
                  +880 567894343
                </h1>
                <h1 className="font-medium  text-gray-400">PHONE NUMBER</h1>
              </div>
            </div>

            <Link
              to="/all"
              className=" w-32 relative inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-full group"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#E04444] opacity-100 group-hover:-translate-x-8"></span>
              <span className="text-center relative w-full  text-[#E04444] transition-colors duration-200 ease-in-out group-hover:text-white">
                See All
              </span>
              <span className="absolute inset-0 border-2 border-[#E04444] rounded-full"></span>
            </Link>
          </div>
          <div className="lg:w-[30%] md:w-[35%]">
            <img
              src="burger.png"
              alt=""
              className="h-full w-full "
              data-aos="zoom-in"
              data-aos-duration="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
