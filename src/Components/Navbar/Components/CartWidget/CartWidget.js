import React, { useState, useEffect } from "react";
import "./cartWidget.css";

const CartWidget = ({ elements }) => {
  const [showNumber, setshowNumber] = useState(false);
  useEffect(() => {
    if (elements < 1) {
      setshowNumber(false);
    } else {
      setshowNumber(true);
    }
  });
  if (elements > 9) {
    elements = "9+";
  }
  return (
    <div id="container" className="container-widget">
      {showNumber && (
        <>
          <div className="container-button"> </div>
          <p className="number">{elements}</p>
        </>
      )}
      <img
        className="car"
        width={"30px"}
        src="https://cdn-icons-png.flaticon.com/512/2838/2838838.png"
        alt=""
      />
    </div>
  );
};

export default CartWidget;
