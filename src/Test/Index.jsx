import React from "react";
import fggssrg from "../Images/1.webp";
import fggssrg1 from "../Images/5.png";
import { useNavigate } from "react-router-dom";


const ProductCard = ({ product }) => {
  const nivigate =useNavigate();
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card border-0 shadow-sm h-100">
        <div className="position-relative">
          {/* Sale Badge */}
          <span
            className="badge bg-primary position-absolute"
            style={{ top: "10px", left: "10px", zIndex: 1 }}
          >
            Sale
          </span>
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.title}
            className="card-img-top img-fluid"
          />
        </div>
        <div className="card-body">
          {/* Product Title */}
          <h5 className="card-title text-truncate">{product.title}</h5>
          {/* Product Price */}
          <p className="card-text">
            <span className="text-decoration-line-through text-muted me-2">
              {product.originalPrice}
            </span>
            <span className="fw-bold text-danger">{product.discountedPrice}</span>
          </p>
          {/* Button */}
          <button className="btn btn-outline-dark w-100" onClick={() => nivigate("/MobaileDetails")} >Choose options</button>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "Putt, I Must Unisex Softstyle T-Shirt",
      image: fggssrg,
      originalPrice: "Tk 5,500.00",
      discountedPrice: "Tk 3,700.00",
    },
    {
      id: 2,
      title: "Never Hit A Shot Unisex Softstyle T-Shirt",
      image: fggssrg1 ,
      originalPrice: "Tk 5,500.00",
      discountedPrice: "Tk 3,700.00",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
