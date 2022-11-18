import React from 'react'
import CartWidget from '../CartWidget/CartWidget';

const MenuItem = ({ mode, text }) => {
  let isTitle = false;
  let isSection = false;
  let isCar = false;
  if (mode === "title") {
    isTitle = true;
  } else {
    if (mode === "section") {
      isSection = true;
    } else {
      isCar = true;
    }
  }
  return (
    <>
      {isTitle ?
        <div>
          <h1 style={{ cursor: "pointer" }} >{text}</h1>
        </div>
        : <>
          {
            isSection ?
              <div >
                <h3 style={{ cursor: "pointer" }}> {text}</h3>
              </div >
              : <>
                {isCar &&
                  <CartWidget elements={4}></CartWidget>
                }</>
          }</>
      }</>
  )
}

export default MenuItem