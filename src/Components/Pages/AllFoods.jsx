import { useEffect, useState } from "react";
import FoodCard from "../Home/FoodCard";


const AllFoods = () => {
    const [search ,setSearch]=useState('')
    const[foods,setFoods]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:1000/allfoods?search=${search}`)
        .then(res=>res.json())
        .then(data=>setFoods(data))
        
    },[search])
   
    const handleSearch=(e)=>{
e.preventDefault();
const value=e.target.search.value;
setSearch(value)
    }
    return (
        <div className="bg-black relative">
          <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dcaf1af5-3162-42f2-a863-b4ce4d9d11ec/dd3d416-326cc8e4-ec52-451f-bcd2-5fba96dea4b3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RjYWYxYWY1LTMxNjItNDJmMi1hODYzLWI0Y2U0ZDlkMTFlY1wvZGQzZDQxNi0zMjZjYzhlNC1lYzUyLTQ1MWYtYmNkMi01ZmJhOTZkZWE0YjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1t57IcCD5NWJ8yUKn4Q1iAwvJTa5g8-jvhicNz9R6fQ"
        alt=""
        className="absolute left-0 top-0 opacity-15"
      />
             <section className=" container text-center mx-auto text-white py-20">
      <h1 className="text-3xl lg:text-5xl  font-bold mb-5 " data-aos="fade-down" data-aos-duration="500">
        All Foods <span className="text-red-500">Showcase </span>
      </h1>
      <p className="lg:w-[60%] mx-auto" data-aos="zoom-in" data-aos-delay="500">
        Discover our curated selection of best-selling dishes that have captured
        the hearts and palates of our patrons. From savory classics to indulgent
        desserts, these culinary delights are sure to tantalize your taste buds
        and leave you craving for more. Experience the essence of our
        restaurants culinary excellence with these signature favorites
        carefully crafted by our talented chefs.
      </p>

      <div className="flex w-full justify-center my-5 ">
        <form className="rounded-full border-2 pl-3" onSubmit={handleSearch}>
            <input name="search" type="text" className="bg-transparent  outline-none py-2 pl-3 autofill:bg-red-400" placeholder="Search Here"/>
            <input type="submit" value="Search" className="bg-red-500 py-2 rounded-full px-3 ml-2"/>
        </form>
      </div>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-5 mt-10" data-aos="fade-up" data-aos-delay="600">
        {foods.map(food=><FoodCard key={food._id} food={food}></FoodCard>)}
      </div>
    </section>
        </div>
    );
};

export default AllFoods;