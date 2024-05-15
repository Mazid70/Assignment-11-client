import { useContext} from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits, MdEmail } from "react-icons/md";
import { FaUser, FaClock } from "react-icons/fa";
import Swal from "sweetalert2";
const UserAddFood = () => {
const { user } = useContext(AuthContext);
const handleSubmit = (e) => {
    e.preventDefault()
    const form=e.target;
    const foodImage= form.imglink.value;
const foodName = form.name.value;
const foodCategory = form.category.value;
const quantity = form.quantity.value;
const price = form.price.value;
const foodOrigin = form.origin.value;
const userName = form.username.value;
const userEmail = form.email.value;
const foodDescription = form.description.value;
const formData = {
    foodImage,
    foodName,
    foodCategory,
    quantity,
    price,
    foodOrigin,
    userName,
    userEmail,
    foodDescription
  }
  console.log(formData)
  fetch(`https://assignment-11-server-eight-phi.vercel.app/userfood`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then(() => {
      Swal.fire({
        title: "Good job!",
        text: "Food Added Successfully ",
        icon: "success",
      });
    });
  };
  return (
    <div className="bg-black min-h-[100vh] pt-20 flex justify-center items-center">
      <div className="bg-[#191919] ">
        <div className="mt-8 p-8 w-[600px] rounded-lg shadow-lg pt-4">
          <h2 className="text-2xl font-bold mb-4 text-white text-center">
           Add New <span className="text-red-500">Food</span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <label
                htmlFor="imglink"
                className="block font-medium text-white"
              >
                Food Image
              </label>
              <input
                type="text"
                name="imglink"
                className="w-full h-10 pl-8  font-bold border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter food Image Link"
                required
              />
              <IoFastFood className="absolute text-lg  top-9 left-2" />
            </div>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <label
                  htmlFor="name"
                  className="block font-medium text-white"
                >
                  Food Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full h-10 pl-8  font-bold border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter food name"
                  required
                />
                <IoFastFood className="absolute text-lg  top-9 left-2" />
              </div>
              <div className="flex-1 relative">
                <label
                  htmlFor="category"
                  className="block font-medium text-white"
                >
                  Food Category
                </label>
                <input
                  type="text"
                  name="category"
                  className="w-full h-10 pl-8  font-bold border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Food Category"
                  required
                />
                <IoFastFood className="absolute text-lg  top-9 left-2" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <label
                  htmlFor="quantity"
                  className="block  font-medium text-white"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  className="w-full h-10 pl-8  font-bold border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter quantity"
                  required
                />
                <MdOutlineProductionQuantityLimits className="absolute text-lg  top-9 left-2" />
              </div>
              <div className="relative flex-1">
                <label
                  htmlFor="price"
                  className="block  font-medium text-white"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  className="w-full h-10 pl-8  font-bold border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter price"
                  required
                />
                <RiMoneyDollarCircleFill className="absolute text-lg  top-9 left-2" />
              </div>
            </div>
            <div className="flex gap-2">
                <div className="relative flex-1">
                <label
                  htmlFor="origin"
                  className="block  font-medium text-white"
                >
                  Food Origin
                </label>
                <input
                  type="text"
                  name="origin"
                  className="w-full h-10 pl-8  font-bold border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Food Origin"
                  required
                />
                <FaClock className="absolute text-lg  top-9 left-2" />
                </div>
                <div className="relative flex-1">
                <label
                htmlFor="username"
                className="block  font-medium text-white"
              >
                User Name
              </label>
              <input
                type="text"
                name="username"
                className="w-full h-10 pl-8  font-bold border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                defaultValue={user?.displayName}
                readOnly
              />
              <FaUser className="absolute text-lg  top-9 left-2" />
                </div>
            </div>
            <div className="relative">
             
            </div>
            <div className="relative">
              <label
                htmlFor="email"
                className="block  font-medium text-white"
              >
              User Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full h-10 pl-8  font-bold border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                defaultValue={user?.email}
                readOnly
              />
              <MdEmail className="absolute text-lg  top-9 left-2" />
            </div>
            <div className="relative">
              <label
                htmlFor="description"
                className="block  font-medium text-white"
              >
                Food Description
              </label>
              <textarea
                type="text"
                name="description"
                className="w-full h-20 pt-2 pl-8  font-bold border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Food Description"
              />
              <MdEmail className="absolute text-lg  top-9 left-2" />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md "
            >
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserAddFood;
