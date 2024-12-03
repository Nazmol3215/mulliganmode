import React from "react";
import "./TrendingAndRecommended.css";
import img1 from "../Images/5.png"
import img2 from "../Images/6.png"
import img3 from "../Images/4.png"
import img4 from "../Images/1.webp"
import img5 from "../Images/3.png"
import img6 from "../Images/4.png"
import img7 from "../Images/9.png"







const TrendingAndRecommended = () => {
  // ডেটা
  const trendingProducts = [
    { id: 1, name: "Wireless Earbuds", price: "$50", image: img1},
    { id: 2, name: "Smartwatch", price: "$100", image: img2 },
    { id: 3, name: "Gaming Headset", price: "$80", image: img3 },
    { id: 3, name: "Gaming Headset", price: "$80", image: img7 },
    { id: 3, name: "Gaming Headset", price: "$80", image: img3 },
  ];

  const recommendedProducts = [
      { id: 6, name: "Laptop Stand", price: "$25", image: img6 },
    { id: 4, name: "Bluetooth Speaker", price: "$30", image: img4 },
    { id: 5, name: "Fitness Tracker", price: "$60", image: img5 },
    { id: 6, name: "Laptop Stand", price: "$25", image: img6 },
  ];

  return (
    <div className="product-sections">
      {/* Trending Products */}
      <div className="section">
        <h2>Trending Products</h2>
        <div className="product-slider">
          {trendingProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h4>{product.name}</h4>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Products */}
      <div className="section">
        <h2>Recommended for You</h2>
        <div className="product-slider">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h4>{product.name}</h4>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingAndRecommended;