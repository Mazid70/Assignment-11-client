import { useContext, useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
const OrderFood = () => {
 
  const {user}=useContext(AuthContext)
  const [orderData, setOrderData] = useState([]);
 const url= `https://assignment-11-server-eight-phi.vercel.app/buy/${user?.email}`
 useEffect(()=>{
axios.get(url,{ withCredentials:'true' }).then(res=>setOrderData(res.data))
 },[url])
  const handleDelete = (buyerEmail, _id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-server-eight-phi.vercel.app/buy/${buyerEmail}/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = orderData.filter((cof) => cof._id != _id);
              setOrderData(remaining);
            }
          });
      }
    });
  };
  console.log(orderData);
  return (
    <div className="bg-black pt-20 min-h-[100vh] w-full">
      <div className="container mx-auto bg-[#191919]  md:p-10 lg:p-10">
        <table className="w-screen lg:w-full md:w-full text-white  ">
          <thead className="bg-red-500 border-b-2">
            <tr className="">
              <th className=" lg:p-5 md:p-5 text-xs md:text-xl lg:text-xl">Food Img</th>
              <th className=" lg:p-5 md:p-5 text-xs md:text-xl lg:text-xl">Food Name</th>
              <th className=" lg:p-5 md:p-5 text-xs md:text-xl lg:text-xl">Food Price</th>
              <th className=" lg:p-5 md:p-5 text-xs md:text-xl lg:text-xl">Added Time</th>
              <th className=" lg:p-5 md:p-5 text-xs md:text-xl lg:text-xl">UserName</th>
              <th className=" lg:p-5 md:p-5 text-xs md:text-xl lg:text-xl"> </th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((e) => (
              <tr key={e._id} className="border-b-2">
                <td className=" flex justify-center items-center text-lg ">
                  <img src={e.foodImage} className="h-10 w-10 md:h-20 md:w-20 lg:h-20 lg:w-20" />
                </td>
                <td className=" text-center text-xs md:text-lg lg:text-lg ">{e.foodName}</td>
                <td className=" text-center text-xs md:text-lg lg:text-lg ">
                  {e.price} x {e.foodQuantity}
                </td>
                <td className=" text-center text-xs md:text-lg lg:text-lg ">{e.buyingDate}</td>
                <td className=" text-center text-xs md:text-lg lg:text-lg ">{e.madeBy}</td>
                <td className=" text-center text-xs md:text-lg lg:text-lg ">
                  <button
                    onClick={() => handleDelete(e.buyerEmail, e._id)}
                    className="md:h-7 md:w-7 lg:h-8 lg:w-8 bg-red-500 rounded-full font-bold text-white"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderFood;
