import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

interface CardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  category,
  description,
  price,
}) => {
  return (
    <div
      className={
        "bg-white rounded-lg shadow-lg  p-4 m-4 flex flex-col w-[356px] hover:shadow-2xl"
      }
    >
      <Image
        src={image}
        alt={title}
        width={356}
        height={250}
        className=" w-[356px] h-[235px] flex-shrink-0 rounded-md object-cover mb-4"
      />

      <div className="w-300 mt-6">
        <Link href={`/`}>
          <span className="text-xl font-bold overflow-hidden text-overflow-ellipsis line-clamp-1 hover:overflow-visible hover:block">
            {title}
          </span>
        </Link>
        <p className="text-sm text-gray-500 ">{category}</p>

        {/* <p className=" mt-6 text-[14px] ">{description}</p> */}
        <p className="mt-6 text-[14px] overflow-hidden text-overflow-ellipsis line-clamp-3">
          {description}
        </p>
        <p className="mt-6 text-[13px]">
          Price: <span className="text-lg font-bold mt-2">${price}</span>
        </p>
      </div>

      <div className="flex flex-row mt-8">
        <button className="bg-black text-white rounded-lg px-8 py-4 hover:bg-gray-700 w-full text-center">
          <div className="flex items-center justify-center">
            <span className="text-sm">Add to Cart</span>
            <CiShoppingCart className="w-5 h-5 ml-2" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
