import Banner from "./Banner";
import BestSell from "./BestSell";
import Contact from "./Contact";


const Home = () => {
    return (
        <div className="bg-black">
            <Banner></Banner>
            <BestSell></BestSell>
            <Contact></Contact>
        </div>
    );
};

export default Home;