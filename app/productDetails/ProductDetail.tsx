// components/ProductCard.tsx

import React from "react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  price: number;
}

const ProductDetail: React.FC<ProductCardProps> = ({
  title,
  category,
  image,
  description,
  price,
}) => {
  return (
    <div className="flex flex-col inline">
      <a
        href=""
        className="text-gray-500 hover:underline mb-4 ml-14 w-[5px] h-[5px]"
      >
        Back
      </a>
      <div className="flex flex-row">
        <div className="w-450 h-350 justify-start items-center gap-134">
          <div className="w-450 self-stretch p-6 mx-10 bg-gray-100 rounded-lg shadow-xl justify-start items-start gap-1 flex">
            <Image
              src={image}
              alt={title}
              width={450}
              height={350}
              className="grow shrink basis-0 self-stretch rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-6 mt-6 max-w-[550px] max-h-[400px] ">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <p className="text-gray-500 text-sm mt-6">
            Category <br />{" "}
            <span className="text-gray-800 text-lg font-semibold">
              {category}{" "}
            </span>
          </p>

          <p className="text-gray-500 text-sm mt-6">
            Description: <br />{" "}
            <span className="text-gray-800 text-[13px] ">{description} </span>
          </p>

          <p className="text-gray-500 mt-10">
            Price: <br />{" "}
            <span className="text-3xl text-black font-semibold ">
              {" "}
              ${price}{" "}
            </span>
          </p>
          <button className="bg-black text-white rounded-lg px-8 py-6 hover:bg-gray-700 w-full text-center">
            <div className="flex items-center justify-center">
              <span className="text-sm">Buy Now</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
