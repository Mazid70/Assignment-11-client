

const FoodCard = ({food}) => {
    const{
        foodName,
        foodImage,
        foodCategory,
        price
    }=food;
    return (
        <div className="bg-[#191919] flex flex-col items-center justify-center mt-28 rounded-xl pb-3 ">
          <div className="-mt-28">
            <img src={foodImage} alt="" className="w-[230px] h-[230px]" />
            
            </div>  
            <div>
            <h1 className="font-medium text-lg">{foodName}</h1>
            <h1 className="font-medium text-lg">{foodCategory}</h1>
            <h1 className="font-medium text-lg">{price}</h1>

            </div>
            <button className="text-red-500 border border-red-500 rounded-full px-2 mt-3 hover:bg-red-500 hover:text-white shadow-md hover:shadow-white"> view details</button>
        </div>
    );
};

export default FoodCard;