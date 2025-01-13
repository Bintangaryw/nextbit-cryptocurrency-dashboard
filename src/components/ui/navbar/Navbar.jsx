import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import nextbit_full from "../../../assets/img/nextbit-logo/full/logo-no-background.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => setNav(!nav);

    return (
        <div className="w-full flex justify-between items-center py-4 px-4">
            <div>
                <img src={nextbit_full} className="w-[100px]" />
            </div>

            <div>
                <ul className="hidden md:flex">
                    <li className="relative px-2 group">
                        <span className="hover:text-[#E24658]">Cryptocurrency</span>
                        {/* Dropdown menu */}
                        <ul className="absolute right-0 top-full w-60 hidden bg-[#282634]  border-[#E24658] rounded shadow-md p-2 group-hover:block">
                            <li className="px-2 py-1 hover:text-[#E24658]">By Market Cap</li>
                            <li className="px-2 py-1 hover:text-[#E24658]">Categories</li>
                        </ul>
                    </li>

                    <li className="relative px-2 group">
                        <span>Settings</span>
                        <ul className=""></ul>
                    </li>
                    <li className="px-2">Profile</li>
                </ul>
            </div>

            <div onClick={toggleNav} className="md:hidden">
                {!nav ? <FaBars /> : <IoCloseSharp />}
            </div>
        </div>
    );
};

export default Navbar;
