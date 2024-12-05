import React from "react";
import "./ProductGrid.css";
import picture1 from "../Images/1.webp";
import picture2 from "../Images/0.png";
import picture3 from "../Images/3.png";
import picture4 from "../Images/4.png";
import picture5 from "../Images/5.webp";

const ProductGridTwo = () => {
  const products = [
    { id: 1, name: "The Dark Side Unisex Softstyle T-Shirt", price: "$20", image: picture1},
    { id: 3, name: "Putt, I Must Unisex Softstyle T-Shirt", price: "$15", image: picture2},
    { id: 3, name: "Never Hit A Shot Unisex Softstyle T-Shirt", price: "$15", image: picture3 },
    { id: 4, name: "May The Course Be With You Unisex Softstyle T-Shirt", price: "$300", image: picture4 },
    { id: 4, name: "The Dark Side Unisex Softstyle T-Shirt", price: "$300", image: picture5 },
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
          <div className="hover-buttons">
            <button className="cart-button">Add Cart</button>
            <button className="wishlist-button">Add Wishlist</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGridTwo;