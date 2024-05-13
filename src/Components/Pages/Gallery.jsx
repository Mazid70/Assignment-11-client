import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useContext} from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Gallery = () => {
  const { user } = useContext(AuthContext);
const handleAdd=(e)=>{
e.preventDefault();
const from=e.target
const name=user?.displayName
const comments=from.comments.value;
const photo=from.photo.value
const galleryItems={name,comments,photo}
console.log(galleryItems)
fetch("http://localhost:1000/gallery", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(galleryItems),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    Swal.fire({
      title: "Success",
      text: "TouristSpot added Successfully",
      icon: "success",
      confirmButtonText: "OK",
    })
}

  return (
    <div className="bg-black pt-20 h-full">
        <div className="container mx-auto">
        <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
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
                disabled
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
      </dialog>
        </div>
      
    </div>
  );
};

export default Gallery;
