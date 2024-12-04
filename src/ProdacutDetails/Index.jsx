import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";





const ProductDetails = () => {
  const navigateTo = useNavigate();

  const [selectedColor, setSelectedColor] = useState("Daisy");
  const [selectedSize, setSelectedSize] = useState("S");

  const colorImages = {
    Daisy: "https://via.placeholder.com/400x400/FFD700/FFFFFF?text=Daisy",
    "Light Blue": "https://via.placeholder.com/400x400/ADD8E6/FFFFFF?text=Light+Blue",
    Navy: "https://via.placeholder.com/400x400/000080/FFFFFF?text=Navy",
    Red: "https://via.placeholder.com/400x400/FF0000/FFFFFF?text=Red",
    Royal: "https://via.placeholder.com/400x400/4169E1/FFFFFF?text=Royal",
    White: "https://via.placeholder.com/400x400/FFFFFF/000000?text=White",
    Black: "https://via.placeholder.com/400x400/000000/FFFFFF?text=Black",
    "Military Green": "https://via.placeholder.com/400x400/4B5320/FFFFFF?text=Military+Green",
    Cornsilk: "https://via.placeholder.com/400x400/FFF8DC/000000?text=Cornsilk",
    Orange: "https://via.placeholder.com/400x400/FFA500/FFFFFF?text=Orange",
    Sapphire: "https://via.placeholder.com/400x400/0F52BA/FFFFFF?text=Sapphire",
    Gold: "https://via.placeholder.com/400x400/FFD700/FFFFFF?text=Gold",
    "Ice Grey": "https://via.placeholder.com/400x400/D3D3D3/000000?text=Ice+Grey",
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    alert(`Added to cart: Color - ${selectedColor}, Size - ${selectedSize}`);
  };

  // const handleBuyNow = () => {
  //   alert(`Buying now: Color - ${selectedColor}, Size - ${selectedSize}`);
  // };

  const colors = Object.keys(colorImages);
  const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];

  return (
    <div className="container my-5">
      <div className="row">
        {/* Image Section */}
        <div className="col-lg-6 text-center mb-4">
          <img
            src={colorImages[selectedColor]}
            alt={selectedColor}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Details Section */}
        <div className="col-lg-6">
          <h1 className="mb-3">Baby You're A Firework Unisex Softstyle T-Shirt</h1>
          <p className="mb-3">
            <span className="text-decoration-line-through text-muted">Tk 5,500.00</span>{" "}
            <span className="text-danger fw-bold">Tk 3,300.00</span>
          </p>
          <p>Shipping calculated at checkout.</p>

          {/* Color Selection */}
          <div className="mb-4">
            <h4>Color</h4>
            <div className="d-flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className={`btn ${selectedColor === color ? "btn-dark" : "btn-outline-secondary"} btn-sm`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-4">
            <h4>Size</h4>
            <div className="d-flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`btn ${selectedSize === size ? "btn-dark" : "btn-outline-secondary"} btn-sm`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex gap-2">
            <button
              onClick={handleAddToCart}
              className="btn btn-dark flex-grow-1"
            >
              Add to cart
            </button>
            <button
              // onClick={handleBuyNow}
              className="btn btn-primary flex-grow-1"
              onClick={() => navigateTo("/OrderComponent")}
              
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
