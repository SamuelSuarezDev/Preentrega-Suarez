import React, { useState } from "react";
import { useCartContext } from "../../../Context/CartContext";
import { useParams } from "react-router-dom";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

export const Brief = () => {
  let prevarray = [];
  const [arrayProducts, setarrayProducts] = useState([]);
  const db = getFirestore();
  const handleDatabase = async () => {
    const querySnapshot = await getDocs(collection(db, "Products"));
    querySnapshot.forEach((doc) => {
      prevarray.push({
        id: doc.id,
        ...doc.data(),
      });
      setarrayProducts(prevarray);
      console.log(arrayProducts);
      return;
    });
  };
  handleDatabase();
  // eslint-disable-next-line no-restricted-globals
  const idPage = location.pathname;
  const { clearCart } = useCartContext();
  let product = arrayProducts.find((pro) => "/carBuy/" + pro.id === idPage);
  console.log(product);
  const [showId, setShowId] = useState(false);
  let array = [];
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const dbref = collection(db, "Buys");
  console.log(product);
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
        clearCart();
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
      <img style={{ margin: "40px" }} width={"200px"} alt="" />
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
            type="number"
          ></input>
          <label for="">Correo</label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            style={{ padding: "10px" }}
            type="email"
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
          <p>Felicidades por su compra, el su id de compra es de {id}</p>
        </>
      )}
      <Link to={"/"}>Volver a inicio</Link>
    </div>
  );
};
