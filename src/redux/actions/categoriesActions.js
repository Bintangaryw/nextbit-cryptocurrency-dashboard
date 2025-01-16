import axios from "axios";
import { setCategories, setTrending, setTopGainers, setTopLosers } from "../reducers/categoriesReducers";

export const getCategories = () => async (dispatch) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v3/coins/categories`, {
            headers: {
                accept: "application/json",
                x_cg_demo_api_key: `${import.meta.env.VITE_API_KEY}`,
            },
        });
        const categories = response.data.slice(0, 100);
        const trendingData = [...categories].sort((a, b) => b.volume_24h - a.volume_24h).slice(0, 3);
        const topGainersData = [...categories].sort((a, b) => b.market_cap_change_24h - a.market_cap_change_24h).slice(0, 3);
        const topLosersData = [...categories].sort((a, b) => a.market_cap_change_24h - b.market_cap_change_24h).slice(0, 3);

        dispatch(setCategories(categories.slice(0, 15)));
        dispatch(setTrending(trendingData));
        dispatch(setTopGainers(topGainersData));
        dispatch(setTopLosers(topLosersData));
    } catch (error) {
        console.log(error);
    }
};
