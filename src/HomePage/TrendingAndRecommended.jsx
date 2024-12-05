import React from "react";
import "./TrendingAndRecommended.css";
import img1 from "../Images/5.png"
import img2 from "../Images/6.png"
import img3 from "../Images/4.png"
import img4 from "../Images/1.webp"
import img5 from "../Images/3.png"
import img6 from "../Images/4.png"
import img7 from "../Images/9.png";
import { useNavigate } from "react-router-dom";







const TrendingAndRecommended = () => {
  const navigateTo = useNavigate();
  // ডেটা
  const trendingProducts = [
    { id: 1, name: "The Dark Side Unisex Softstyle T-Shirt", price: "$50", image: img1},
    { id: 2, name: "Putt, I Must Unisex Softstyle T-Shirt", price: "$100", image: img2 },
    { id: 3, name: "Never Hit A Shot Unisex Softstyle T-Shirt", price: "$80", image: img3 },
    { id: 1, name: "May The Course Be With You Unisex Softstyle T-Shirt", price: "$50", image: img1},
    { id: 3, name: "The Dark Side Unisex Softstyle T-Shirt", price: "$80", image: img7 },
    { id: 3, name: "May The Course Be With You Unisex Softstyle T-Shirt", price: "$80", image: img3 },
    { id: 3, name: "Putt, I Must Unisex Softstyle T-Shirt", price: "$80", image: img3 },
    { id: 3, name: "The Dark Side Unisex Softstyle T-Shirt", price: "$80", image: img3 },
  ];

  const recommendedProducts = [
      { id: 5, name: "Putt, I Must Unisex Softstyle T-Shirt", price: "$60", image: img5 },
      { id: 6, name: "May The Course Be With You Unisex Softstyle T-Shirt", price: "$25", image: img6 },
      { id: 4, name: "Putt, I Must Unisex Softstyle T-Shirt", price: "$30", image: img4 },
      { id: 5, name: "The Dark Side Unisex Softstyle T-Shirt", price: "$60", image: img5 },
      { id: 4, name: "The Dark Side Unisex Softstyle T-Shirt", price: "$30", image: img4 },
      { id: 6, name: "May The Course Be With You Unisex Softstyle T-Shirt", price: "$25", image: img6 },
      { id: 6, name: "May The Course Be With You Unisex Softstyle T-Shirt", price: "$25", image: img6 },
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
                <button className="bay_now" onClick={() => navigateTo("/ProductDetails")}>bay now</button>
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
                <button className="bay_now" onClick={() => navigateTo("/ProductDetails")} >bay now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingAndRecommended;