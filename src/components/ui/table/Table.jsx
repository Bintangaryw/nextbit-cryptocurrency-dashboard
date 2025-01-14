import { MdNumbers } from "react-icons/md";
import PropTypes from "prop-types";

const Table = ({ coinName, coinPrice, coin1h, coin24h, coin7d, coin24hVolume, coinMarketCap, coinLast7d }) => {
    return (
        <div>
            <table className="w-full">
                <tr>
                    <th>
                        <MdNumbers className="mx-auto" />
                    </th>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>1h</th>
                    <th>24h</th>
                    <th>7d</th>
                    <th>24h Volume</th>
                    <th>Market Cap</th>
                    <th>Last 7 Days</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{coinName}</td>
                    <td>{coinPrice}</td>
                    <td>{coin1h}</td>
                    <td>{coin24h}</td>
                    <td>{coin7d}</td>
                    <td>{coin24hVolume}</td>
                    <td>{coinMarketCap}</td>
                    <td>{coinLast7d}</td>
                </tr>
            </table>
        </div>
    );
};

Table.propTypes = {
    coinName: PropTypes.any,
    coinPrice: PropTypes.any,
    coin1h: PropTypes.any,
    coin24h: PropTypes.any,
    coin7d: PropTypes.any,
    coin24hVolume: PropTypes.any,
    coinMarketCap: PropTypes.any,
    coinLast7d: PropTypes.any,
};

export default Table;
