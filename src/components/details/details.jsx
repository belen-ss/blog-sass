import React from "react";
import "./details.sass";
import Mobile from "../../images/illustration-phones.svg";


const Details = () => {
  return (
    <div className="details-container">
      <h3>Designed for the future</h3>
      <div className="editor">
        <div className="editor-details">
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus odio consectetur in. Nam laudantium optio sit quam ea
            ab perspiciatis commodi ipsa tempora consectetur nisi laboriosam
            vero, aperiam animi quibusdam! Voluptatibus odio consectetur in. 
          </p>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus odio consectetur in. Nam laudantium optio sit quam ea
            ab perspiciatis commodi ipsa tempora consectetur nisi laboriosam
            vero, aperiam animi quibusdam! Voluptatibus odio consectetur in. 
          </p>
        </div>
        <div className="editor-image"/>
      </div>
      <div className="state_art">
        <div className="state_art-image">
          <img src={Mobile} alt="" />
        </div>
        <div className="state_art-details">
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus odio consectetur in. Nam laudantium optio sit quam ea
            ab perspiciatis commodi ipsa tempora consectetur nisi laboriosam
            vero, aperiam animi quibusdam! Voluptatibus odio consectetur in. Nam
            laudantium optio sit quam ea ab perspiciatis commodi ipsa tempora
            consectetur nisi laboriosam vero, aperiam animi quibusdam!
          </p>
        </div>
      </div>
      <div className="desktop">
        <div className="desktop-image"/>
        <div className="desktop-details">
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus odio consectetur in. Nam laudantium optio sit quam ea
            ab perspiciatis commodi ipsa tempora consectetur nisi laboriosam
            vero, aperiam animi quibusdam!
          </p>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus odio consectetur in. Nam laudantium optio sit quam ea
            ab perspiciatis commodi ipsa tempora consectetur nisi laboriosam
            vero, aperiam animi quibusdam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
