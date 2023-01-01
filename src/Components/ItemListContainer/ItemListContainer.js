import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(
    (e) => {
      setLoading(true);

      const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products");

      getDocs(collectionRef)
        .then((response) => {
          const itemsAdaptados = response.docs.map((doc) => {
            const data = doc.data();

            return { id: doc.id, ...data };
          });

          setItems(itemsAdaptados);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [categoryId]
  );

  if (loading) {
    return <h1>Cargando Nota...</h1>;
  }

  return (
    <div>
      <h2 className="tituloItem">Productos</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
