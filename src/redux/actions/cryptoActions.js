import axios from "axios";
import { setCryptoBMC } from "../reducers/cryptoReducers";

export const getCrypto = () => async (dispatch) => {
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
        dispatch(setCryptoBMC(response.data));
    } catch (error) {
        console.log(error);
    }
};
