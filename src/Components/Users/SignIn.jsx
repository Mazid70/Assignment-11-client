import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLock} from "react-icons/fa";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const SignIn = () => {
  const [visible, setVisible] = useState(true);
  const {signIn,googleSignIn,githubSignIn }=useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const togglePassword = () => {
    setVisible(!visible);

  };

  const signInGoogle = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Sign In Success",
          icon: "success",
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sign In Failed",
        });
      });
  };
  const signInGithub = () => {
    githubSignIn()
      .then(() => {
        setTimeout(() => {
          Swal.fire({
            title: "Good job!",
            text: "Sign In Success",
            icon: "success",
          });
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sign In Failed",
        });
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Sign In Success",
          icon: "success",
        });
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 2000);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sign In Failed",
        });
      });
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
          <h1 className="font-bold text-3xl text-center mb-5">Sign In</h1>
          <form onSubmit={handleSignIn}>
            <div className="relative">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="h-12 w-full pl-12 rounded-lg mt-2 mb-3 text-black"
              placeholder="Enter Your Email "
              required
            />
            <MdEmail className="absolute text-gray-400 top-12 left-4" />
            </div>
          
            <div className="relative">
              <label htmlFor="email">Password</label>
              <input
                type={visible ? "password" : "text"}
                name="email"
                className="h-12 w-full pl-12 rounded-lg mt-2  text-black"
                placeholder="Enter Your Password "
                required
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
              <FaLock className="absolute text-gray-400 top-12 left-4" />
            </div>

            <h1 className="text-right">Forget Password</h1>
            <input
              type="Submit"
              value="Sign In"
              className="h-12 w-full pl-5 rounded-lg bg-red-500 mt-2 mb-3"
            />
          </form>
          <h1 className="text-center">Or Sign In with</h1>
          <div className="flex justify-center gap-3 mt-5">
            <div onClick={signInGoogle} className="bg-white text-2xl px-10 py-2 rounded-full cursor-pointer">
              <FcGoogle />
            </div>
            <div onClick={signInGithub} className="bg-white text-2xl px-10 py-2 rounded-full cursor-pointer">
              <FaGithub className="text-black" />
            </div>
            <div className="bg-white text-2xl px-10 py-2 rounded-full cursor-pointer">
              <FaFacebook className="bg-white text-blue-500" />
            </div>
          </div>
          <h1 className="text-center mt-5">Do not have an account yet? <Link to='/signup' ><span className="font-bold hover:text-blue-500 hover:underline cursor-pointer">SignUp</span> </Link>for free</h1>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
