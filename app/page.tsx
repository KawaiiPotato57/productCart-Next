import React from "react";
// import Welcome from "./welcome/Welcome";
import ProductDetail from "./productDetails/ProductDetail";
import Navbar from "./components/navbar/Navbar";
// import Card from "./components/card/Card";

export default function Home() {
  const products = [
    {
      id: 1,
      image:
        "https://img.freepik.com/premium-photo/there-is-painting-sunset-with-birds-flying-water-generative-ai_927978-7229.jpg",
      title: "Product Title 1",
      category: "Category 1",
      description:
        "Product Description goes here. It can be a bit longer to see how it wraps. Product Description goes here. It can be a bit longer to see how it wraps.",
      price: 99.99,
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/premium-photo/there-is-painting-sunset-with-birds-flying-water-generative-ai_927978-7229.jpg",
      title: "Product Title 2",
      category: "Category 2",
      description:
        "Product Description goes here. It can be a bit longer to see how it wraps. Product Description goes here. It can be a bit longer to see how it wraps.",
      price: 129.99,
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-photo/there-is-painting-sunset-with-birds-flying-water-generative-ai_927978-7229.jpg",
      title: "Product Title 2",
      category: "Category 2",
      description:
        "Product Description goes here. It can be a bit longer to see how it wraps. Product Description goes here. It can be a bit longer to see how it wraps.",
      price: 129.99,
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/premium-photo/there-is-painting-sunset-with-birds-flying-water-generative-ai_927978-7229.jpg",
      title: "Product Title 2",
      category: "Category 2",
      description:
        "Product Description goes here. It can be a bit longer to see how it wraps. Product Description goes here. It can be a bit longer to see how it wraps.",
      price: 129.99,
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/premium-photo/there-is-painting-sunset-with-birds-flying-water-generative-ai_927978-7229.jpg",
      title: "Product Title 2",
      category: "Category 2",
      description:
        "Product Description goes here. It can be a bit longer to see how it wraps. Product Description goes here. It can be a bit longer to see how it wraps.",
      price: 129.99,
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/premium-photo/there-is-painting-sunset-with-birds-flying-water-generative-ai_927978-7229.jpg",
      title: "Product Title 2",
      category: "Category 2",
      description:
        "Product Description goes here. It can be a bit longer to see how it wraps. Product Description goes here. It can be a bit longer to see how it wraps.",
      price: 129.99,
    },
    // Add more products as needed
  ];
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <ProductDetail
          title="Test Product"
          category="Electronic"
          image="https://img.freepik.com/premium-photo/there-is-painting-sunset-with-birds-flying-water-generative-ai_927978-7229.jpg"
          description="Dive into the world of abstract painting and discover techniques that bring your visions to life."
          price={13.5}
        />
      </div>
      {/* <div className="flex flex-wrap justify-center items-center px-8 py-6">
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            description={product.description}
            price={product.price}
          />
        ))}
      </div> */}
    </>
  );
}
