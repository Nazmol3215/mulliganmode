import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gfh from "../Images/1.webp";
import gfh1 from "../Images/8.png";
import gfh3 from "../Images/4.png";
import gfh4 from "../Images/9.png";
import { useNavigate } from "react-router-dom";

// Separate styles object
const styles = {
  card: {
    border: "none",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    
  },
  img: {
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  cardBody: {
    textAlign: "center",
  },
  btnOrder: {
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
    margin:"5px"
  },
  price: {
    color: "red",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
};

// Product Card Component
const ProductCard = ({ product, onOrderClick }) => {
  const navigateTo = useNavigate();

  const { image, code, price, description } = product;

  return (
    <div className="col-md-4 col-X-Small-6 col-lg-3">
      <div className="card" style={styles.card}>
        <img src={image} alt={`Product ${code}`} className="card-img-top" style={styles.img} />
        <div className="card-body" style={styles.cardBody}>
          <p className="product-code">Code: {code}</p>
          <p className="price" style={styles.price}>৳ {price}</p>
          <p>{description}</p>
          <button
            className="btn btn-order"
            style={styles.btnOrder}
            onClick={() => onOrderClick(code, price)}
          >
            Order Now
          </button>
          <button  className="btn btn-order"
            style={styles.btnOrder} onClick={() => navigateTo("/ProductDetails")}   >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
const ProductCardsFirst = () => {

  const products = [
    { image: gfh, code: 469, price: 1180, description: "সাদা কালার - কোড: ৪৬৯" },
    { image: gfh1, code: 457, price: 1460, description: "ডার্ক কালার - কোড: ৪৫৭" },
    { image: gfh3, code: 471, price: 1150, description: "মান্টি কালার - কোড: ৪৭১" },
    { image: gfh4, code: 719, price: 1380, description: "ডার্ক কালার - কোড: ৭১৯" },
  ];

  const handleOrderClick = (code, price) => {
    alert(`You have selected product with code: ${code}, price: ৳${price}`);
  };

  return (
    <div className="container my-5">
      <div className="row g-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onOrderClick={handleOrderClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCardsFirst;
