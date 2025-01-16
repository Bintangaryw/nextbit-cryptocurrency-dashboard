import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { TbBrandTorchain } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { TbChartBarPopular } from "react-icons/tb";
import { useState } from "react";
import { Link } from "react-router-dom";
import nextbit_full from "../../../assets/img/nextbit-logo/full/logo-no-background.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => setNav(!nav);

    return (
        <div className="w-full flex justify-between items-center py-4 px-4">
            <div>
                <img src={nextbit_full} className="w-[100px]" />
            </div>

            {/* desktop navbar */}
            <div>
                <ul className="hidden md:flex">
                    <li className="relative px-2 group">
                        <span className="hover:text-[#E24658]">Cryptocurrency</span>
                        {/* Dropdown menu */}
                        <ul className="absolute right-0 top-full w-60 hidden bg-[#282634]  border-[#E24658] rounded shadow-md p-2 group-hover:block">
                            <Link to="/">
                                <li className="flex items-center px-2 py-1 hover:text-[#E24658]">
                                    <TbChartBarPopular />
                                    <span className="px-2">By Market Cap</span>
                                </li>
                            </Link>
                            <Link to="/crypto-categories">
                                <li className="flex items-center px-2 py-1 hover:text-[#E24658]">
                                    <MdOutlineCategory />
                                    <span className="px-2">Categories</span>
                                </li>
                            </Link>

                            <li className="flex items-center px-2 py-1 hover:text-[#E24658]">
                                <TbBrandTorchain /> <span className="px-2">Chains</span>
                            </li>
                        </ul>
                    </li>

                    <li className="relative px-2 group">
                        <span className="hover:text-[#E24658]">Settings</span>
                        <ul className="absolute right-0 top-full w-60 hidden bg-[#282634] rounded shadow-md p-2 group-hover:block">
                            <li className="px-2 py-1 hover:text-[#E24658]">Settings 1</li>
                            <li className="px-2 py-1 hover:text-[#E24658]">Settings 2</li>
                        </ul>
                    </li>
                    <li className="px-2">Profile</li>
                </ul>
            </div>

            {/* mobile navbar button */}
            <div onClick={toggleNav} className="md:hidden">
                {!nav ? <FaBars /> : <IoCloseSharp />}
            </div>
        </div>
    );
};

export default Navbar;
