import React from "react";
import Navbar from "../../components/ui/navbar/Navbar";
import ByMarketCap from "../../components/content/by-market-cap/ByMarketCap";

const Home = () => {
    return (
        <div className="max-w-[1200px] container mx-auto">
            <Navbar />
            <ByMarketCap />
        </div>
    );
};

export default Home;
