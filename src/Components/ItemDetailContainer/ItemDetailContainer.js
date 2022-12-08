import { useState, useEffect } from "react";
import { useParams} from "react-router-dom"
import { getItemById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    const { itemId } = useParams()

  useEffect(() => {
    getItemById(itemId)
      .then((response) => {
        setItem(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId]);

  if (isLoading) {
    return <h2>Cargando detalle...</h2>;
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
