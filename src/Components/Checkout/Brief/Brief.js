import React, { useState } from "react";
import { useCartContext } from "../../../Context/CartContext";
import { useProductContext } from "../../../Context/ProductContext";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

export const Brief = () => {
  const { clearItem } = useCartContext();
  // eslint-disable-next-line no-restricted-globals
  const idPage = location.pathname.replace(/[^0-9]+/g, "");
  const [showId, setShowId] = useState(false);
  const { arrayProducts } = useProductContext();
  let array = [];
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const db = getFirestore();
  const dbref = collection(db, "Buys");
  let product = arrayProducts[0].find((pro) => pro.id == Number(idPage));
  const data = {
    name: name,
    phone: phone,
    email: email,
  };
  const handleBuy = async () => {
    if (name != "" && phone != "" && email != "") {
      addDoc(dbref, data).then(async (docRef) => {
        const querySnapshot = await getDocs(collection(db, "Buys"));
        querySnapshot.forEach((doc) => {
          array.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        array.map((doc) => {
          if (doc.name == name) {
            setId(doc.id);
          }
        });
        setShowId(true);
        clearItem(idPage);
      });
    } else {
      alert("Todos los campos son obligatortios");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "20px", margin: "10px" }}>
        Comprar {product.title}
      </p>
      <img
        style={{ margin: "40px" }}
        width={"200px"}
        src={product.image}
        alt=""
      />
      {!showId && (
        <>
          <label for="">Nombre</label>
          <input
            onChange={(event) => setName(event.target.value)}
            style={{ padding: "10px" }}
            type="text"
          ></input>
          <label for="">Teléfono</label>
          <input
            onChange={(event) => setPhone(event.target.value)}
            style={{ padding: "10px" }}
            type="text"
          ></input>
          <label for="">Correo</label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            style={{ padding: "10px" }}
            type="text"
          ></input>
          <button
            onClick={handleBuy}
            style={{ padding: "10px", margin: "50px" }}
            type="submit"
          >
            Finalizar Compra
          </button>
        </>
      )}
      {showId && (
        <>
          <p>
            Felicidades por comprar el {product.title}, su id de compra es de{" "}
            {id}
          </p>
        </>
      )}
      <Link to={"/"}>Volver a inicio</Link>
    </div>
  );
};
