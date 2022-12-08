// Componente para el cuerpo de la pagina, ahora solo con un mensaje fijo}
// falta agregar los productos a mostrar y la logica
// este es importado en App.js
// Este recibe atributo de color y tamaño de texto, y el mensaje a mostrar

import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getItems, getItemByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(
    (e) => {
      if (!categoryId) {
        getItems()
          .then((response) => {
            setItems(response);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        getItemByCategory(categoryId)
          .then((response) => {
            setItems(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    [categoryId]
  );

  return (
    <div>
      <h2 className="tituloItem" >
      Productos
      </h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
