import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-100 py-4 px-6 flex items-center justify-center ">
      <div className="text-black text-lg font-bold px-5">Ecommerce</div>
      <p className="category-link text-gray-600 text-xs px-5 hover:text-black hover:font-bold hover:cursor-pointer">
        Electronics
      </p>
      <p className="category-link px-4 ">Men&apos;s Fashion</p>
      <p className="category-link px-4 ">Women&apos;s Fashion</p>
      <p className="category-link pl-4 pr-[8rem]">Jewelery</p>

      <div className="flex items-center">
        <div className="relative mr-10">
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-gray-800 rounded-lg border border-gray-300 pl-6 pr-16 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />

          <button className="absolute right-0 top-0 mt-3 mr-4 p-0 cursor-pointer">
            <CiSearch className="w-5 h-5" />
          </button>
        </div>
        <button className="bg-black text-white rounded-lg px-6 py-2 hover:bg-gray-700 flex items-center">
          <span className="mx-2">0</span>
          <CiShoppingCart className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
