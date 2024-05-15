import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
const Gallery = () => {
  const data = useLoaderData();
  const [galleryData, setGallaeryData] = useState(data);

  const { user } = useContext(AuthContext);
  const handleAdd = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const comments = from.comments.value;
    const photo = from.photo.value;
    const galleryItems = { name, comments, photo };
    console.log(galleryItems);
    setGallaeryData([...galleryData, galleryItems]);
    fetch("https://assignment-11-server-eight-phi.vercel.app/gallery", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(galleryItems),
    }).then((res) => res.json());

    Swal.fire({
      title: "Success",
      text: "TouristSpot added Successfully",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="bg-black py-20 min-h-[100vh]">

      <div className="container mx-auto">
      <h1 className="text-3xl lg:text-5xl text-white text-center font-bold mb-5 " data-aos="fade-down" data-aos-duration="500">
        Foods <span className="text-red-500">Gallery</span>
      </h1>
        <div className="grid  gap-5 md:grid-cols-3 lg:grid-cols-4 " data-aos="zoom-in" data-aos-delay="500">
          {galleryData.map((e) => (
            <div key={e._id}>
              <div className="relative  ">
                <img
                  className="h-[230px] w-[370px]"
                  src={e.photo}
                  alt="photo"
                />
                <div className="text-center text-white absolute w-full h-full top-0 left-0 bg-black opacity-0 z-10 transition-opacity duration-300 hover:opacity-80">
                  <h1 className="font-semibold text-xl mt-5">
                    user name: {e.name}
                  </h1>
                  <p className="font-semibold text-xl">
                    comments/feedback:{" "}
                    <span className="italic font-normal text-base">
                      {e.comments}
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center my-5 " >
          <button
            className="btn bg-red-500 text-white border-0"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Add New
          </button>
        </div>
{user?
       <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-[#191919] text-white">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h1 className="font-bold text-3xl text-center mb-5">Add New</h1>
            <form onSubmit={handleAdd}>
              <div className="relative">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="h-12 w-full pl-12 rounded-lg mt-2 mb-3 text-black disabled:bg-white"
                  defaultValue={user?.displayName}
                  readOnly
                />
                <FaUser className="absolute text-gray-400 top-12 left-4" />
              </div>
              <div className="relative">
                <label htmlFor="email">FeedBack or Exprience</label>
                <textarea
                  type="text"
                  name="comments"
                  className="h-20 pt-3 w-full pl-12 rounded-lg mt-2 mb-3 text-black"
                  placeholder="Enter Your Comments "
                  required
                />
                <MdEmail className="absolute text-gray-400 top-12 left-4" />
              </div>
              <div className="relative">
                <label htmlFor="photo">Photo URL</label>
                <input
                  type="link"
                  name="photo"
                  className="h-12 w-full pl-12 rounded-lg mt-2 mb-3 text-black"
                  placeholder="Enter Your Photo URL "
                  required
                />
                <FaUser className="absolute text-gray-400 top-12 left-4" />
              </div>
              <input
                type="Submit"
                value="Submit"
                className="h-12 w-full font-semibold text-lg rounded-lg bg-red-500 mt-4 mb-3"
              />
            </form>
          </div>
        </dialog>:"" }
      </div>
    </div>
  );
};

export default Gallery;
