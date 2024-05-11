
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [visible, setVisible] = useState(true);
  const togglePassword = () => {
    setVisible(!visible);
  };
  return (
    <section className="h-[100vh] relative text-white bg-black bg-[url()] flex items-center justify-center w-full">
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcaf1af5-3162-42f2-a863-b4ce4d9d11ec/dd3d416-326cc8e4-ec52-451f-bcd2-5fba96dea4b3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RjYWYxYWY1LTMxNjItNDJmMi1hODYzLWI0Y2U0ZDlkMTFlY1wvZGQzZDQxNi0zMjZjYzhlNC1lYzUyLTQ1MWYtYmNkMi01ZmJhOTZkZWE0YjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1t57IcCD5NWJ8yUKn4Q1iAwvJTa5g8-jvhicNz9R6fQ" alt="" className="absolute left-0 top-0 opacity-15"/>
      
      <div className="container mx-auto flex gap-40">
        <div className="w-1/2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/607/567/non_2x/fast-food-vector-clipart-design-graphic-clipart-design-free-png.png"
            alt=""
          />
        </div>
        <div className="bg-[#191919] w-[30%] p-10 rounded-lg">
          <h1 className="font-bold text-3xl text-center mb-5">Sign Up</h1>
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="h-12 w-full pl-5 rounded-lg mt-2 mb-3 text-black"
              placeholder="Enter Your Name "
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="h-12 w-full pl-5 rounded-lg mt-2 mb-3 text-black"
              placeholder="Enter Your Email "
            />
            
            <label htmlFor="photo">Photo URL</label>
            <input
              type="link"
              name="photo"
              className="h-12 w-full pl-5 rounded-lg mt-2 mb-3 text-black"
              placeholder="Enter Your Photo URL "
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              name="phone"
              className="h-12 w-full pl-5 rounded-lg mt-2 mb-3 text-black"
              placeholder="Enter Your Phone Number "
            />
            <div className="relative">
              <label htmlFor="password">Password</label>
              <input
                type={visible ? "password" : "text"}
                name="password"
                className="h-12 w-full pl-5 rounded-lg mt-2  text-black"
                placeholder="Enter Your Password "
              />
              {visible ? (
                <BsFillEyeFill
                  onClick={togglePassword}
                  className="text-black text-2xl absolute top-11 right-7"
                />
              ) : (
                <BsFillEyeSlashFill
                  onClick={togglePassword}
                  className="text-black text-2xl absolute top-11 right-7"
                />
              )}
            </div>

            <input
              type="Submit"
              value="Sign Up"
              className="h-12 w-full pl-5 rounded-lg bg-red-500 mt-4 mb-3"
            />
          </form>
         
        <h3 className="mt-5 text-center">
          Already have an account?{" "}
          <Link className="font-semibold hover:text-blue-500 hover:underline" to="/signin">
            Sign In
          </Link>
        </h3>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
