const FastestDelivery = () => {
  return (
    <section className="text-white mt-10 relative">
      <div className="h-16 w-16 rounded-full bg-gradient-to-b from-gray-950 to-gray-900 absolute top-20 left-10"></div>
      <div>
        <h1 className="font-bold text-4xl text-center " data-aos="fade-down" data-aos-delay="800">
          Fast delivery within an hours
        </h1>
        <p className="text-center" data-aos="fade-down" data-aos-delay="900"> order before 15:00</p>
        <div className="bg-red-500 pt-1 w-20 mx-auto mt-5"></div>
      </div>
      <div className="flex justify-center flex-col md:flex-row lg:flex-row  container mx-auto  ">
        <div className="lg:w-[40%] relative">
          {/* design start  */}

          <div className="rounded-full hidden lg:block border-t-red-500 border-t-2 w-[450px]  absolute h-full -top-5 left-[95px]">
            {" "}
          </div>
          <div className="rounded-full hidden lg:block border-t-red-500 border-t-2 w-[380px] absolute h-full top-0 left-[130px]"></div>

          {/* design end  */}
          <img src="delivery.png" alt="delivery" className="h-full  w-full" data-aos="fade-right" data-aos-delay="1000" / >
        </div>
        <div className="space-y-7 mt-12" data-aos="fade-left" data-aos-delay="1100">
          <div className="border-b-red-500 border-b-2 pb-2">
            <h1 className="font-semibold text-xl">ON THE FIRST:</h1>
            <h1 className="text-gray-400 w-4/5 text-lg">
              Soup noodles, borscht, hodgepodge, cream cheese soup with
              mushrooms
            </h1>
          </div>
          <div className="border-b-red-500 border-b-2 pb-2">
            <h1 className="font-semibold text-xl">ON THE SECOND</h1>
            <h1 className="text-gray-400 w-4/5 text-lg">
              Pork chop, eggplant pasta, salmon steak, Thai chicken, baked
              potatoes, risotto
            </h1>
          </div>
          <div className="border-b-red-500 border-b-2 pb-2">
            <h1 className="font-semibold text-xl">SALADS</h1>
            <h1 className="text-gray-400 w-4/5 text-lg">
              Funzoza, caesar, spring, pineapple
            </h1>
          </div>
          <div className="border-b-red-500 border-b-2 pb-2">
            <h1 className="font-semibold text-xl">BEVERAGES:</h1>
            <h1 className="text-gray-400 w-4/5 text-lg">
              Coffee, fruit tea, cranberry juice, apple-cherry compote
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastestDelivery;
