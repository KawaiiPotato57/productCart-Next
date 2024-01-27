import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";

interface NavbarProps {
  changeCategory: (category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ changeCategory }) => {
  const handleClick = (category: string) => {
    changeCategory(category);
    console.log(category);
  };
  return (
    <nav className="bg-gray-100 py-4 px-6 flex items-center justify-center ">
      <div className="text-black text-lg font-bold px-5">Ecommerce</div>
      <p
        onClick={() => handleClick("electronics")}
        className="category-link text-gray-600 text-xs px-5 hover:text-black hover:font-bold hover:cursor-pointer"
      >
        Electronics
      </p>
      <p
        onClick={() => handleClick("men's clothing")}
        className="category-link px-4"
      >
        Men's Fashion
      </p>
      <p
        onClick={() => handleClick("women's clothing")}
        className="category-link px-4"
      >
        Women's Fashion
      </p>
      <p
        onClick={() => handleClick("jewelery")}
        className="category-link pl-4 pr-[8rem]"
      >
        Jewelery
      </p>
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
// import React from "react";
// import { CiSearch, CiShoppingCart } from "react-icons/ci";

// const Navbar: React.FC = () => {
//   return (
//     <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
//       {" "}
//       {/* Container for centering */}
//       <div className="text-black text-lg font-bold">Ecommerce</div>
//       <div className="flex items-center">
//         <ul className="hidden md:flex space-x-4">
//           {" "}
//           {/* Hide categories on smaller screens */}
//           <li className="category-link text-gray-600 hover:text-black hover:font-bold hover:cursor-pointer">
//             Electronics
//           </li>
//           <li className="category-link">Men's Fashion</li>
//           <li className="category-link">Women's Fashion</li>
//           <li className="category-link">Jewelery</li>
//         </ul>
//       </div>
//       <div className="flex items-center">
//         <div className="relative mr-4">
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-white text-gray-800 rounded-lg border border-gray-300 pl-4 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent sm:text-sm w-full"
//           />
//           <button className="absolute right-0 top-0 mt-3 mr-4 p-0 cursor-pointer">
//             <CiSearch className="w-5 h-5" />
//           </button>
//         </div>
//         <button className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 flex items-center">
//           <span className="mx-2">0</span>
//           <CiShoppingCart className="w-6 h-6" />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
