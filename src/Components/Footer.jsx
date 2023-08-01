import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Footer = () => {
  return <div className="footer__container">
        <div className="head">
            <h1 className="footer__logo">Movify</h1>
        </div>
        
        <div className="footer__links">
        <li className="footer__link">
          <Link to="/">Home</Link>
        </li>
        <li className="footer__link">
          <Link to="/movie">Movies & Tv shows</Link>
        </li>
        </div>   
  </div>;
};

export default Footer;
