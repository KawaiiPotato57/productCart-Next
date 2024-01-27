"use client";
import React, { useState, useEffect } from "react";
import Welcome from "./welcome/Welcome";
import ProductDetail from "./productDetails/ProductDetail";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import CartCard from "./components/cartCard/CartCard";
import Cart from "./cart/Cart";

interface Product {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
}

const Home: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>("");

  const changeCategory = (category: string) => {
    console.log("in main", category);
    setCategory(`category/${category}`);
  };
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${category}`)
      .then((res) => res.json())
      .then((json) => {
        setProductData(json);
        console.log(productData);
      });
  }, [category]);

  return (
    <>
      <Navbar changeCategory={changeCategory} />
      {/* <div className="flex flex-col  h-screen">
        <Cart />
      </div> */}

      <div className="flex flex-wrap justify-center items-center px-8 py-6">
        {productData.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

{
  /* <ProductDetail
          title="Test Product"
          category="Electronic"
          image="https://img.freepik.com/premium-photo/there-is-painting-sunset-with-birds-flying-water-generative-ai_927978-7229.jpg"
          description="Dive into the world of abstract painting and discover techniques that bring your visions to life."
          price={13.5}
        /> */
}

{
  /* <CartCard
          imageSrc="https://via.placeholder.com/136x119"
          productName="Test Product"
          price={20}
          quantity={1}
          // onDecreaseClick={() => console.log("Decrease clicked")}
          // onIncreaseClick={() => console.log("Increase clicked")}
        /> */
}
