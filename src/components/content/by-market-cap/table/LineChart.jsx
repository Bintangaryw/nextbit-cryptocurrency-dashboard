import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import PropTypes from "prop-types";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const LineChart = ({ coinPrice = [], coinName }) => {
    const lineColor = coinPrice[0] > coinPrice[coinPrice.length - 1] ? "red" : "#32ca5b";
    const options = {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const data = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
            {
                label: coinName,
                data: coinPrice,
                borderColor: lineColor,
            },
        ],
    };

    return (
        <>
            <Line options={options} data={data} />
        </>
    );
};

LineChart.propTypes = {
    coinPrice: PropTypes.any,
    coinName: PropTypes.any,
};

export default LineChart;
