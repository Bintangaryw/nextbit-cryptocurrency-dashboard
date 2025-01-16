import Table from "./table/Table";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { useSelector } from "react-redux";

const Categories = () => {
    const trending = useSelector((state) => state.categories.trending);
    const topGainers = useSelector((state) => state.categories.topGainers);
    const topLosers = useSelector((state) => state.categories.topLosers);

    return (
        <div className="w-full py-4 px-4 md:text-base">
            <h1 className="text-xl font-bold pb-3 md:text-3xl">Top Crypto Categories by Market Cap</h1>
            <p className="text-gray-600">This list of cryptocurrency categories ranks the largest sectors by market cap. Note: Some cryptos may overlap across multiple categories.</p>

            <h2 className="font-bold pt-5 text-base">Highlights</h2>
            <div className="flex flex-col sm:flex-row justify-around items-center p-3">
                {/* Trending */}
                <div className="w-full sm:w-96 rounded-md border border-[#E24658] p-4 my-5">
                    <div className="flex flex-col h-full justify-around">
                        <div className="flex justify-between items-center pb-4">
                            <p className="flex items-center text-base font-bold">
                                <span className="pr-2">
                                    <FaArrowTrendUp />
                                </span>
                                Trending Categories
                            </p>
                            <p>View more</p>
                        </div>
                        {trending.map((trending) => {
                            return (
                                <div key={trending.id} className="flex justify-between items-center pb-4">
                                    <p>{trending.name}</p>
                                    <p>1.1%</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Top Gainers */}
                <div className="w-full sm:w-96 rounded-md border border-[#E24658] p-4 my-5">
                    <div className="flex flex-col h-full justify-around">
                        <div className="flex justify-between items-center pb-4">
                            <p className="flex items-center text-base font-bold">
                                <span className="pr-2">
                                    <IoIosRocket />
                                </span>
                                Top Gainers
                            </p>
                            <p>View more</p>
                        </div>
                        {topGainers.map((topgainers) => {
                            return (
                                <div key={topgainers.id} className="flex justify-between items-center pb-4">
                                    <p>{topgainers.name}</p>
                                    <p>1.1%</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Top Losers */}
                <div className="w-full sm:w-96 rounded-md border border-[#E24658] p-4 my-5">
                    <div className="flex flex-col h-full justify-around">
                        <div className="flex justify-between items-center pb-4">
                            <p className="flex items-center text-base font-bold">
                                <span className="pr-2">
                                    <FaArrowTrendDown />
                                </span>
                                Top Losers
                            </p>
                            <p>View more</p>
                        </div>
                        {topLosers.map((toplosers) => {
                            return (
                                <div key={toplosers.id} className="flex justify-between items-center pb-4">
                                    <p>{toplosers.name}</p>
                                    <p>1.1%</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <Table />
        </div>
    );
};

export default Categories;
