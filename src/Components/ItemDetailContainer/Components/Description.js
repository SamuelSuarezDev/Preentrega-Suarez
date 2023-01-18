import React, { useState } from "react";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useParams } from "react-router-dom";
export const Description = () => {
  let array = [];
  const [arrayProducts, setarrayProducts] = useState([]);
  const db = getFirestore();
  const handleDatabase = async () => {
    const querySnapshot = await getDocs(collection(db, "Products"));
    querySnapshot.forEach((doc) => {
      array.push({
        id: doc.id,
        ...doc.data(),
      });
      setarrayProducts(array);
      console.log(arrayProducts);
      return;
    });
  };
  handleDatabase();
  const { id } = useParams(0);
  const product = arrayProducts.find((pro) => pro.id === id);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <img src={product?.image} alt="" style={{ width: "300px" }} />
        <p>{product?.title}</p>
        <p>{product?.price}$</p>
      </div>
    </div>
  );
};
