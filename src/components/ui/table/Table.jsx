import { MdNumbers } from "react-icons/md";
import { FaCaretUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import LineChart from "./LineChart";

const Table = () => {
    const [coinsBMC, setCoinsBMC] = useState([]);

    // get coins by market cap
    useEffect(() => {
        const getCoinsBMC = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v3/coins/markets`, {
                    params: {
                        vs_currency: "idr",
                        order: "market_cap_desc",
                        per_page: 15,
                        sparkline: true,
                    },
                    headers: {
                        accept: "application/json",
                        x_cg_demo_api_key: `${import.meta.env.VITE_API_KEY}`,
                    },
                });
                setCoinsBMC(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCoinsBMC();
    }, []);

    const formatToRupiah = (value) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0, // Jika tidak ingin desimal
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
                            <th className="w-40 md:w-64 text-left pl-5 sticky left-12 bg-[#0f0e14] z-10">Coin</th>
                            <th className="w-32 text-right">Price</th>
                            <th className="w-16 text-center pr-0">1h</th>
                            <th className="w-16 text-center pr-0">24h</th>
                            <th className="w-16 text-center pr-0">7d</th>
                            <th className="w-36 text-right truncate">24h Volume</th>
                            <th className="w-36 text-right truncate">Market Cap</th>
                            <th className="w-32">Last 7 Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coinsBMC.map((coin) => {
                            const lastPrice = coin.sparkline_in_7d.price.at(-1);
                            const price1HourAgo = coin.sparkline_in_7d.price.at(-7);
                            const price7DaysAgo = coin.sparkline_in_7d.price[0];

                            const priceChange1h = ((lastPrice - price1HourAgo) / price1HourAgo) * 100 || 0;
                            const priceChange24h = coin.price_change_percentage_24h || 0;
                            const priceChange7d = ((lastPrice - price7DaysAgo) / price7DaysAgo) * 100 || 0;
                            const prices = coin.sparkline_in_7d.price;
                            const totalData = prices.length;
                            const interval = Math.floor(totalData / 10);
                            const sampledData = prices.filter((_, index) => index % interval === 0).slice(0, 10);

                            // Function to determine color and symbol
                            const getChangeIndicator = (value) => {
                                if (value < 0) {
                                    return { color: "text-red-400", icon: <FaCaretDown /> };
                                }
                                return { color: "text-green-400", icon: <FaCaretUp /> };
                            };
                            const change1h = getChangeIndicator(priceChange1h);
                            const change24h = getChangeIndicator(priceChange24h);
                            const change7d = getChangeIndicator(priceChange7d);

                            return (
                                <tr key={coin.id}>
                                    {/* number */}
                                    <td className="text-center sticky left-0 bg-[#0f0e14] z-10">#</td>

                                    {/* name */}
                                    <td className="flex item-center h-auto text-left pl-5 sticky left-12 bg-[#0f0e14] z-10">
                                        <img src={coin.image} className="w-7 h-7" alt={coin.name} />
                                        <span className="pl-2 my-auto">{coin.name}</span>
                                        <span className=" px-1 my-auto text-sm text-gray-700"> &#x2022; {coin.symbol}</span>
                                    </td>

                                    {/* price */}
                                    <td className="text-right">{formatToRupiah(coin.current_price)}</td>

                                    {/* 1h changes */}
                                    <td className={`text-center pr-0 ${change1h.color}`}>
                                        <div className="flex items-center">
                                            <span>{change1h.icon}</span>
                                            <div>{priceChange1h.toFixed(1)}%</div>
                                        </div>
                                    </td>

                                    {/* 24h changes */}
                                    <td className={`text-center pr-0 ${change24h.color}`}>
                                        <div className="flex items-center">
                                            <span>{change24h.icon}</span>
                                            <div>{priceChange24h.toFixed(1)}%</div>
                                        </div>
                                    </td>

                                    {/* 7d changes */}
                                    <td className={`text-center pr-0 ${change7d.color}`}>
                                        <div className="flex items-center">
                                            <span>{change7d.icon}</span>
                                            <div>{priceChange7d.toFixed(1)}%</div>
                                        </div>
                                    </td>

                                    {/* 24h volume */}
                                    <td className="text-right truncate">{formatToRupiah(coin.total_volume)}</td>

                                    {/* market cap */}
                                    <td className="text-right truncate">{formatToRupiah(coin.market_cap)}</td>

                                    {/* 7days chart */}
                                    <td className="text-right truncate p-0">
                                        <LineChart coinName={coin.name} coinPrice={sampledData} />
                                    </td>
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
