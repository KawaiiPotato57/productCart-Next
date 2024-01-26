import React from "react";
import CartCard from "../components/cartCard/CartCard";

const Cart: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="">
        {" "}
        <div className="mt-[60px]">
          <h1 className="text-2xl font-bold ">Your Cart</h1>

          <div className="flex flex-col  items-center h-screen">
            <div className="w-[780px]  h-6 pl-[1px] pr-[3px] justify-end items-center gap-[50px] inline-flex mb-6">
              <div className="w-[140px] pl-[30px] text-zinc-500 text-lg font-light capitalize">
                Name
              </div>
              <div className="w-[140px] pl-[60px] text-zinc-500 text-lg font-light capitalize">
                Price
              </div>
              <div className="w-[140px] pl-[60px] text-zinc-500 text-lg font-light capitalize">
                Quantity
              </div>
            </div>
            <CartCard
              imageSrc="https://img.freepik.com/premium-photo/there-is-painting-sunset-with-birds-flying-water-generative-ai_927978-7229.jpg"
              productName="Test Product"
              price={20}
              quantity={1}
            />
            <CartCard
              imageSrc="https://img.freepik.com/premium-photo/there-is-painting-sunset-with-birds-flying-water-generative-ai_927978-7229.jpg"
              productName="Test Product"
              price={20}
              quantity={1}
            />
            <CartCard
              imageSrc="https://img.freepik.com/premium-photo/there-is-painting-sunset-with-birds-flying-water-generative-ai_927978-7229.jpg"
              productName="Test Product"
              price={20}
              quantity={1}
            />
          </div>
        </div>{" "}
      </div>
      <div className="flex ml-[25px] mt-[120px]  shadow-2xl w-[420px] h-[500px]">
        <div className="order-summary-container max-w-md mx-auto">
          <header className="order-summary-header px-4 py-4 bg-white rounded-lg shadow-md">
            <h2 className="order-summary-heading text-lg font-medium text-gray-900">
              Your Total
            </h2>
          </header>

          <div className="order-summary-details px-4 py-4">
            <div className="order-item flex items-center justify-between">
              <div className="product-info flex items-start gap-2">
                <p className="product-name text-base font-medium text-gray-700">
                  Test Product
                </p>
                <p className="product-quantity text-base font-normal text-gray-500">
                  x3
                </p>
              </div>
              <p className="product-price text-base font-medium text-gray-700">
                $60
              </p>
            </div>

            <div className="order-total flex items-center justify-between mt-[15rem] mb-[1rem]">
              <p className="total-label text-2xl font-medium text-gray-900">
                Total
              </p>
              <p className="total-amount text-xl font-medium text-gray-900">
                $60
              </p>
            </div>
          </div>
          <button className="bg-black text-white  mt-2 ml-2 px-8 py-4 hover:bg-gray-700 w-[364px] h-[68px] bg-black rounded-[20px] text-center">
            <div className="flex items-center justify-center">
              <span className="text-sm">Checkout</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
