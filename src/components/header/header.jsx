import React from "react";
import "./header.sass";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <h2>Blogr</h2>
        <a href="/">Product</a>
        <a href="/">Company</a>
        <a href="/">Connect</a>
      </div>
      <div className="buttons-user">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
