import Navbar from "../../components/ui/navbar/Navbar";
import ByMarketCap from "../../components/content/by-market-cap/ByMarketCap";

const Home = () => {
    return (
        <div className="max-w-[1400px] container mx-auto md:text-base">
            <Navbar />
            <ByMarketCap />
        </div>
    );
};

export default Home;
