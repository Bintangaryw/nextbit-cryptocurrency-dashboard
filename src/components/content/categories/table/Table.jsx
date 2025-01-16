import { MdNumbers } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
// import LineChart from "../../by-market-cap/table/LineChart";

const Table = () => {
    const [categories, setCategories] = useState([]);

    // get coins by market cap
    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v3/coins/categories`, {
                    headers: {
                        accept: "application/json",
                        x_cg_demo_api_key: `${import.meta.env.VITE_API_KEY}`,
                    },
                });
                setCategories(response.data.slice(0, 15));
                console.log(response.data.slice(0, 15));
            } catch (error) {
                alert(error);
                console.log(error);
            }
        };
        getCategories();
    }, []);

    const formatToRupiah = (value) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(value);
    };

    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full whitespace-nowrap table-fixed">
                    <thead>
                        <tr>
                            <th className="w-12 sticky left-0 bg-[#0f0e14] z-10">
                                <MdNumbers className="mx-auto" />
                            </th>
                            <th className="w-40 md:w-64 text-left pl-5 sticky left-12 bg-[#0f0e14] z-10">Category</th>
                            <th className="w-20 text-right">Top Gainers</th>
                            <th className="w-36 text-right truncate">24h Volume</th>
                            <th className="w-36 text-right truncate">Market Cap</th>
                            <th className="w-24 text-right truncate"># of coins</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((cat) => {
                            return (
                                <tr key={cat.id}>
                                    {/* number */}
                                    <td className="text-center sticky left-0 bg-[#0f0e14] z-10">#</td>

                                    {/* categories */}
                                    <td className="flex item-center h-auto text-left pl-5 sticky left-12 bg-[#0f0e14] z-10">
                                        <span className="pl-2 my-auto truncate">{cat.name}</span>
                                    </td>

                                    {/* top-gainers */}
                                    <td className="pr-0">
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center justify-around w-full">
                                                <img src={cat.top_3_coins[0]} className="w-5" />
                                                <img src={cat.top_3_coins[1]} className="w-5" />
                                                <img src={cat.top_3_coins[2]} className="w-5" />
                                            </div>
                                        </div>
                                    </td>

                                    {/* 24h volume */}
                                    <td className="text-center truncate pr-0">{formatToRupiah(cat.volume_24h)}</td>

                                    {/* market cap */}
                                    <td className="text-center truncate pr-0">{formatToRupiah(cat.market_cap)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table;
