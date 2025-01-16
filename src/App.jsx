import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/ui/navbar/Navbar";
import Home from "./pages/home/Home";
import Categories from "./components/content/categories/Categories";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="max-w-[1400px] container mx-auto md:text-base">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/crypto-categories" element={<Categories />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
