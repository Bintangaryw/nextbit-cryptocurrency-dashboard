import axios from "axios";
import { setCryptoBMC, setTotalPage } from "../reducers/cryptoReducers";

export const getCrypto = (currentPage) => async (dispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v3/coins/markets`, {
            params: {
                vs_currency: "idr",
                order: "market_cap_desc",
                page: currentPage,
                per_page: 10,
                sparkline: true,
            },
            headers: {
                accept: "application/json",
                x_cg_demo_api_key: `${import.meta.env.VITE_API_KEY}`,
            },
        });
        const totalPage = 100 / response.data.length;
        console.log(response.data);
        dispatch(setCryptoBMC(response.data));
        dispatch(setTotalPage(totalPage));
    } catch (error) {
        console.log(error);
    }
};
