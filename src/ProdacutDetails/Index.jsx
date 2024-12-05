import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import picture from "../Images/776.png";
import picture1 from "../Images/6.png";
import picture2 from "../Images/776.png";
import picture3 from "../Images/8.png";
import picture4 from "../Images/88.png";
import picture5 from "../Images/123.png";
import picture6 from "../Images/324.png";
import picture7 from "../Images/443.png";
import picture8 from "../Images/543.png";
import picture9 from "../Images/776.png";
import picture11 from "../Images/4.png";
import picture912 from "../Images/7.png";

const ProductDetails = () => {
  const navigateTo = useNavigate();

  const [selectedColor, setSelectedColor] = useState("Daisy");
  const [selectedSize, setSelectedSize] = useState("S");

  const colorImages = {
    Daisy: picture,
    Blue: picture1,
    Navy: picture2,
    Red: picture3,
    Royal: picture4,
    White: picture5,
    Black: picture6,
    Military: picture7,
    Cornsilk: picture8,
    Orange: picture8,
    Sapphire: picture9,
    Gold: picture11,
    Ice: picture912,
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    alert(`Added to cart: Color - ${selectedColor}, Size - ${selectedSize}`);
  };

  const colors = Object.keys(colorImages);
  const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];

  return (
    <div
      style={{
        margin: "2rem auto",
        maxWidth: "800px",
        backgroundColor: "#f8f9fa", // Light gray background for the container
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          backgroundColor: "#ffffff", // White background for the flex container
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        {/* Image Section */}
        <div
          style={{
            flex: "1 1 40%",
            textAlign: "center",
            backgroundColor: "#f1f1f1", // Light background for the image section
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <img
            src={colorImages[selectedColor]}
            alt={selectedColor}
            style={{
              maxWidth: "100%",
              borderRadius: "0.5rem",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>

        {/* Details Section */}
        <div
          style={{
            flex: "1 1 50%",
            backgroundColor: "#e9ecef", // Slightly darker gray for the details section
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >

          {/* Color Selection */}
          <div style={{ marginBottom: "1rem" }}>
            <h4>Color</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorChange(color)}
                  style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid",
                    backgroundColor: selectedColor === color ? "#000" : "#fff",
                    color: selectedColor === color ? "#fff" : "#000",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                  }}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div style={{ marginBottom: "1rem" }}>
            <h4>Size</h4>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid",
                    backgroundColor: selectedSize === size ? "#000" : "#fff",
                    color: selectedSize === size ? "#fff" : "#000",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div style={{ marginBottom: "1rem" }}>
            <p style={{ marginBottom: "0.5rem" }}>
              <h1 style={{ marginBottom: "1rem" }}>Baby You're A Firework Unisex Softstyle T-Shirt</h1>
              <span style={{ textDecoration: "line-through", color: "#6c757d" }}>
                Tk 5,500.00
              </span>{" "}
              <span style={{ color: "#dc3545", fontWeight: "bold" }}>Tk 3,300.00</span>
            </p>
            <p>Shipping calculated at checkout.</p>
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              onClick={handleAddToCart}
              style={{
                flexGrow: 1,
                padding: "0.75rem 1rem",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "0.25rem",
                cursor: "pointer",
              }}
            >
              Add to cart
            </button>
            <button
              onClick={() => navigateTo("/OrderComponent")}
              style={{
                flexGrow: 1,
                padding: "0.75rem 1rem",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "0.25rem",
                cursor: "pointer",
              }}
            >
              Buy it now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
