import React from "react";
import "./footer.sass";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <h3>Blogr</h3>
      </div>
      <div>
        <strong>Product</strong>
        <a href="/">Overview</a>
        <a href="/">Pricing</a>
        <a href="/">Marketplace</a>
        <a href="/">Features</a>
        <a href="/">Integrations</a>
      </div>
      <div>
        <strong>Company</strong>
        <a href="/">About</a>
        <a href="/">Team</a>
        <a href="/">Blog</a>
        <a href="/">Careers</a>
      </div>
      <div>
        <strong>Connect</strong>
        <a href="/">Contact</a>
        <a href="/">Newsletter</a>
        <a href="/">LinkedIn</a>
      </div>
    </div>
  );
};

export default Footer;
