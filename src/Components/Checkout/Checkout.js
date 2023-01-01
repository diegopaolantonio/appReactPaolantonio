import "./Checkout.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, getPrecioTotal, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  console.log(name, email, phone);

  const handlePrintOrder = async () => {
    setLoading(true);

    try {
      const order = {
        buyer: {
          name: { name },
          email: { email },
          phone: { phone },
        },
        items: cart,
        total: getPrecioTotal(),
      };

      const batch = writeBatch(db);

      const ids = cart.map((item) => item.id);

      const productsRef = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );
      const productsAddedToCartFromFirestore = await getDocs(productsRef);

      const { docs } = productsAddedToCartFromFirestore;

      const outOfStock = [];

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");

        const orderAdded = await addDoc(orderRef, order);

        clearCart();

        setTimeout(() => {
          navigate("/");
        }, 2000);

        console.log(orderAdded.id);
      } else {
        console.error("Hay productos fuera de stock");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Generando Orden...</h1>;
  }

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <p>nombre</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>email</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>telefono</p>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </form>
      <hr></hr>
      <button className="linkCheckout" onClick={handlePrintOrder}>
        Confirmar compra
      </button>
    </div>
  );
};

export default Checkout;
