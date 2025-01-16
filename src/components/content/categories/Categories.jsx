import Table from "./table/Table";

const Categories = () => {
    return (
        <div className="w-full py-4 px-4">
            <h1 className="text-xl font-bold pb-3 md:text-3xl">Top Crypto Categories by Market Cap</h1>
            <p className="text-gray-600">This list of cryptocurrency categories ranks the largest sectors by market cap. Note: Some cryptos may overlap across multiple categories.</p>

            <Table />
        </div>
    );
};

export default Categories;
