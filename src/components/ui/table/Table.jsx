import { MdNumbers } from "react-icons/md";
import axios from "axios";
import { useState, useEffect } from "react";

const Table = () => {
    const [coinsBMC, setCoinsBMC] = useState([]);

    useEffect(() => {
        const getCoinsBMC = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v3/coins/markets`, {
                    params: {
                        vs_currency: "idr",
                        order: "market_cap_desc",
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
    return (
        <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap table-fixed">
                <thead>
                    <tr>
                        <th className="w-12 sticky left-0 bg-[#0f0e14] z-10">
                            <MdNumbers className="mx-auto" />
                        </th>
                        <th className="w-40 md:w-64 text-left pl-5 sticky left-12 bg-[#0f0e14] z-10">Coin</th>
                        <th className="w-32 text-right">Price</th>
                        <th className="w-12 text-center pr-0">1h</th>
                        <th className="w-12 text-center pr-0">24h</th>
                        <th className="w-12 text-center pr-0">7d</th>
                        <th className="w-36 text-right truncate">24h Volume</th>
                        <th className="w-36 text-right truncate">Market Cap</th>
                        <th className="w-36 text-right truncate">Last 7 Days</th>
                    </tr>
                </thead>
                <tbody>
                    {coinsBMC.map((coin) => (
                        <tr key={coin.id}>
                            <td className="text-center sticky left-0 bg-[#0f0e14] z-10">#</td>
                            <td className="flex items-center text-left pl-5 sticky left-12 bg-[#0f0e14] z-10">
                                <img src={coin.image} className="w-7 h-7" alt={coin.name} />
                                <span className="pl-2">{coin.name}</span>
                            </td>
                            <td className="text-right">{coin.current_price}</td>
                            <td className="text-center pr-0">10</td>
                            <td className="text-center pr-0">10</td>
                            <td className="text-center pr-0">10</td>
                            <td className="text-right truncate">100,000,000,000</td>
                            <td className="text-right truncate">100,000,000,000</td>
                            <td className="text-right truncate">100,000,000,000</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
