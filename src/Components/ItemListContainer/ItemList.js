/* eslint-disable eqeqeq */
import React, { useState } from "react";
import Product from "./Components/Product/Product";
import { useLocation } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
export const ItemList = () => {
  const location = useLocation();
  const [arrayProducts, setarrayProducts] = useState([]);
  let array = [];
  const db = getFirestore();
  const handleDatabase = async () => {
    const querySnapshot = await getDocs(collection(db, "Products"));
    querySnapshot.forEach((doc) => {
      array.push({
        id: doc.id,
        ...doc.data(),
      });
      setarrayProducts(array);
    });
    console.log(arrayProducts);
  };
  handleDatabase();
  console.log("location", location);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {location.pathname != "/" ? (
        <>
          {arrayProducts.map((pro) => (
            <div>
              {"/category/" + pro.category == location.pathname && (
                <Product
                  key={pro.id}
                  image={pro.image}
                  title={pro.title}
                  price={pro.price}
                  to={"/item/" + pro.id}
                />
              )}
            </div>
          ))}
        </>
      ) : (
        <>
          {arrayProducts.map(({ id, image, title, price, category }) => (
            <>
              <>
                <div key={id}>
                  <Product
                    image={image}
                    title={title}
                    price={price}
                    to={"/item/" + id}
                  />
                </div>
              </>
            </>
          ))}
        </>
      )}
    </div>
  );
};
