import { useLoaderData } from "react-router-dom";

const Details = () => {
    const food=useLoaderData();
    const{
        foodName, foodImage, foodCategory, price ,madeBy,foodOrigin,description
    }=food
  return (
    <section className="flex h-[100vh] justify-center items-center bg-black text-white">
         <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcaf1af5-3162-42f2-a863-b4ce4d9d11ec/dd3d416-326cc8e4-ec52-451f-bcd2-5fba96dea4b3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RjYWYxYWY1LTMxNjItNDJmMi1hODYzLWI0Y2U0ZDlkMTFlY1wvZGQzZDQxNi0zMjZjYzhlNC1lYzUyLTQ1MWYtYmNkMi01ZmJhOTZkZWE0YjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1t57IcCD5NWJ8yUKn4Q1iAwvJTa5g8-jvhicNz9R6fQ"
        alt=""
        className="absolute left-0 bottom-0 opacity-10"
      />
      <div className="bg-[#191919]  flex p-10 gap-10">
        <div className="shadow-xl bg-red-500 -ml-20">
          <img
            className="h-[300px] w-300px"
            src={foodImage}
            alt=""
          />
          <div className="bg-white p-5 text-black">
            <h1 className="text-lg font-medium ">Made By: {madeBy}</h1>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{foodName}</h1>
          <h1 className=" font-bold text-gray-300">{foodCategory}</h1>
          <p className="text-sm text-gray-300 w-[300px] mt-5">
            {description}
          </p>
          <h1 className="font-bold text-3xl text-red-500 mt-5">{price}</h1>
         
          <h1 className="font-semibold text-lg">
          Food Origin: {foodOrigin}
          </h1>
          <button className="bg-red-500 text-lg font-semibold px-5 py-2 rounded-xl mt-5">Buy Now </button>
        </div>
      </div>
    </section>
  );
};

export default Details;
