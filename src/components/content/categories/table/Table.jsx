import { MdNumbers } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import axios from "axios";
import { getCategories } from "../../../../redux/actions/categoriesActions";

const Table = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

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
