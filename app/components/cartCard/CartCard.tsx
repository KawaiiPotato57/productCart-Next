import React from "react";

interface CartCardProps {
  imageSrc: string;
  productName: string;
  price: number;
  quantity: number;
}

const CartCard: React.FC<CartCardProps> = ({
  imageSrc,
  productName,
  price,
  quantity,
}) => {
  return (
    <div className="flex items-center justify-between shadow-xl w-[780px] h-[125px] my-5">
      <img
        className="w-[136px] h-[119px] rounded-[10px]"
        src={imageSrc}
        alt="Product Image"
      />
      <div className="flex items-center text-black text-xl font-medium font-Montserrat capitalize">
        {productName}
      </div>
      <div className="text-black text-xl font-medium font-Poppins">
        ${price}
      </div>
      <div className="flex items-center">
        <div className="bg-stone-800 rounded-[5px] items-center hover:bg-gray-700">
          <button className="w-6 h-6 text-white text-center">-</button>
        </div>
        <div className="px-3 py-[5px] bg-white rounded-[5px] flex items-center">
          <div className="text-black text-xs font-medium font-Inter leading-[14.68px]">
            {quantity}
          </div>
        </div>
        <div className="bg-stone-800 rounded-[5px] items-center hover:bg-gray-700">
          <button className="w-6 h-6 text-white text-center">+</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
