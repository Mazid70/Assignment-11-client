import Banner from "./Banner";
import BestSell from "./BestSell";
import Contact from "./Contact";
import FastestDelivery from "./FastestDelivery";

const Home = () => {
  return (
    <div className="bg-black">
      <Banner></Banner>
      <BestSell></BestSell>
      <FastestDelivery></FastestDelivery>
      <Contact></Contact>
    </div>
  );
};

export default Home;
