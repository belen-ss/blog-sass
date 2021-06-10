import React from "react";
import "./header.sass";

const Header = () => {
  return (
    <div className="header-container">
      <h2>Blogr</h2>
      <input type="checkbox" className="burger" id="" />
  
      <div className="buttons-header">
        <div>
          <div class="dropdown">
            <a href="/">Product</a>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div class="dropdown">
            <a href="/">Company</a>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div class="dropdown">
            <a href="/">Connect</a>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div className="buttons-user">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
