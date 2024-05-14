import { useLoaderData } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits, MdEmail } from "react-icons/md";
import { FaUser, FaClock } from "react-icons/fa";
import Swal from "sweetalert2";
const UserFoodShocase = () => {
  const foods = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodImage = form.imglink.value;
    const foodName = form.name.value;
    const foodCategory = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const foodOrigin = form.origin.value;
    const userName = form.username.value;
    const userEmail = form.email.value;
    const formid = form.formId.value;
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
      foodDescription,
    };
    console.log(formData);
    fetch(`http://localhost:1000/userfood/${user.email}/${formid}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "Food Updated Successfully ",
          icon: "success",
        });
      });
  };
  return (
    <div className="bg-black pt-20 min-h-[100vh]">
      <div className="container mx-auto bg-[#191919] p-10">
        <table className="w-full text-white  ">
          <thead className="bg-red-500 border-b-2">
            <tr className="">
              <th className="p-5 text-xl">Food Img</th>
              <th className="p-5 text-xl">Food Name</th>
              <th className="p-5 text-xl">Food Price</th>
              <th className="p-5 text-xl">Quantitiy</th>
              <th className="p-5 text-xl">Food Category</th>
              <th className="p-5 text-xl"> </th>
            </tr>
          </thead>
          <tbody>
            {foods.map((e) => (
              <tr key={e._id} className="border-b-2">
                <td className=" flex justify-center text-lg ">
                  <img src={e.foodImage} className="h-20 w-20" />
                </td>
                <td className=" text-center text-lg ">{e.foodName}</td>
                <td className=" text-center text-lg ">{e.price}</td>
                <td className=" text-center text-lg ">{e.quantity}</td>
                <td className=" text-center text-lg ">{e.foodCategory}</td>
                <td className=" text-center text-lg ">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="flex items-center justify-center h-8 w-8 bg-red-500 rounded-full font-bold text-white"
                  >
                    <GrUpdate />
                  </button>
                </td>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box bg-[#191919] ">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h1 className="font-bold text-3xl text-center mb-5">
                      Update Food
                    </h1>
                    <form onSubmit={handleUpdate} className="text-black">
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
                          defaultValue={e.foodImage}
                          required
                        />
                        <IoFastFood className="absolute text-lg  top-9 left-2" />
                        <input
                          type="text"
                          name="formId"
                          className="hidden"
                          value={e._id}
                        />
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
                            defaultValue={e.foodName}
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
                            defaultValue={e.foodCategory}
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
                            defaultValue={e.quantity}
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
                            defaultValue={e.price}
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
                            defaultValue={e.foodOrigin}
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
                      <div className="relative"></div>
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
                          defaultValue={e.foodDescription}
                        />
                        <MdEmail className="absolute text-lg  top-9 left-2" />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 px-4 rounded-md "
                      >
                        Update
                      </button>
                    </form>
                  </div>
                </dialog>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserFoodShocase;
