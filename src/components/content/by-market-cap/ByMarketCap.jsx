import Table from "../../ui/table/Table";

const ByMarketCap = () => {
    return (
        <div className="w-full py-4 px-4">
            <h1 className="text-xl font-bold pb-5 md:text-3xl">Cryptocurrency Prices by Market Cap</h1>
            <Table />
        </div>
    );
};

export default ByMarketCap;
