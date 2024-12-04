import React, { useEffect, useState } from "react";
import "./Nabar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigateTo = useNavigate();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="logo" onClick={() => navigateTo("/")}>mullignmode</div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>
        <div className="cart-icon">🛒</div>
      </div>
    </header>
  );
};

export default Navbar;