import React from "react";
export const ArrayMock = ({ array }) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  });
  promise.then((res) => {
    console.log(res);
  });
  return;
};
