import "./ItemDetail.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const handleOnAdd = (cantidad, id, category, brand, name, price) => {
    console.log("Cantidad " + cantidad);

    addToCart({ id, category, brand, name, price, cantidad });
  };

  return (
    <div>
      <img src={item?.pictureURL} alt={item?.title}></img>
      <div>
        <h2>
          {item.category} {item.brand}
        </h2>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p className="itemPriceDetail">USD {item.price}</p>
        <ItemCount item={item} initial={0} stock={10} onAdd={handleOnAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
