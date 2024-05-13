import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits, MdEmail } from "react-icons/md";
import { FaUser, FaClock } from "react-icons/fa";
const BuyFood = () => {
  const food = useLoaderData();
  const { foodName, price,_id } = food;
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const Fromquantity = parseInt(form.quantity.value);
    if (food.quantity === 0) {
      return alert("no available");
    }
    if (Fromquantity < 1) {
      return alert("addminimum 1");
    }
    if (Fromquantity > food.quantity) {
      return alert(`only available${quantity}`);
    }
    const quantity=parseInt(food.quantity-Fromquantity)
   const updatedQuantity={quantity}
   console.log(updatedQuantity)
    fetch(
        `http://localhost:1000/home/${_id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedQuantity),
        }
      ).then(res=>res.json())
  };
  return (
    <div className="bg-black flex justify-center h-[100vh] items-center w-full">
      <div className="bg-[#191919] ">
        <div className="mt-8 p-8 w-[500px] rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Food Purchase Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <label
                htmlFor="foodName"
                className="block font-medium text-white"
              >
                Food Name
              </label>
              <input
                type="text"
                name="foodName"
                className="w-full h-10 pl-8  font-bold border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter food name"
                value={foodName}
                required
                readOnly
              />
              <IoFastFood className="absolute text-lg  top-9 left-2" />
            </div>
            <div className="relative">
              <label htmlFor="price" className="block  font-medium text-white">
                Price
              </label>
              <input
                type="text"
                name="price"
                className="w-full h-10 pl-8  font-bold border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter price"
                value={price}
                required
                readOnly
              />
              <RiMoneyDollarCircleFill className="absolute text-lg  top-9 left-2" />
            </div>
            <div className="relative">
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
            <div className="relative">
              <label
                htmlFor="buyerName"
                className="block  font-medium text-white"
              >
                Buyer Name
              </label>
              <input
                type="text"
                name="buyerName"
                className="w-full h-10 pl-8  font-bold border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={user?.displayName}
                readOnly
              />
              <FaUser className="absolute text-lg  top-9 left-2" />
            </div>
            <div className="relative">
              <label
                htmlFor="buyerEmail"
                className="block  font-medium text-white"
              >
                Buyer Email
              </label>
              <input
                type="email"
                name="buyerEmail"
                className="w-full h-10 pl-8  font-bold border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={user?.email}
                readOnly
              />
              <MdEmail className="absolute text-lg  top-9 left-2" />
            </div>
            <div className="relative">
              <label
                htmlFor="buyingDate"
                className="block  font-medium text-white"
              >
                Buying Date
              </label>
              <input
                type="text"
                name="buyingDate"
                className="w-full h-10 pl-8  font-bold border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={new Date().toLocaleString()}
                readOnly
              />
              <FaClock className="absolute text-lg  top-9 left-2" />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md "
            >
              Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyFood;
