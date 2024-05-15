
import Lottie from "lottie-react";
import Animation from "./error.json";
import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div className="bg-[#E9FDFF] h-[100vh] flex justify-center items-center">
            <div className="">
            
            <Lottie className="lg:h-[400px] lg:w-[600px]" animationData={Animation} loop={true} />

            <h1 className="font-extrabold text-5xl "> PAGE NOT FOUND</h1>
            <p className="text-start font-semibold mt-2">The page You are looking for does not Exit or an  other error <br /> occurred,
                go back to home page
            </p>
            <div className="flex w-full "><Link className="btn justify-items-start mt-5 bg-red-500 text-white " to="/">Go Home</Link></div>
            
            </div>
            
        </div>
    );
};

export default Error;