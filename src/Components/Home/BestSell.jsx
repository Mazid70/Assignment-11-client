import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const BestSell = () => {
    const[foods,setFoods]=useState([])
    useEffect(()=>{
        fetch('./food.json')
        .then(res=>res.json())
        .then(data=>setFoods(data))
        console.log(foods)
    },[foods])
  return (
    <section className="container mx-auto text-white mt-52 md:mt-10 lg:mt-0">
      <h1 className="text-3xl lg:text-5xl  font-bold mb-5">
        Best Sellers <span className="text-red-500">Showcase </span>
      </h1>
      <p className="lg:w-[60%]">
        Discover our curated selection of best-selling dishes that have captured
        the hearts and palates of our patrons. From savory classics to indulgent
        desserts, these culinary delights are sure to tantalize your taste buds
        and leave you craving for more. Experience the essence of our
        restaurants culinary excellence with these signature favorites
        carefully crafted by our talented chefs.
      </p>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-5 mt-10">
        {foods.map(food=><FoodCard key={food.id} food={food}></FoodCard>)}
      </div>
    </section>
  );
};

export default BestSell;
