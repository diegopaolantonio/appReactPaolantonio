import "./Item.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ item }) => {
  const handOnAdd = (cantidad, id) => {
    console.log("Cantidad " + cantidad);
  };

  return (
    <div className="itemProduct">
      <img
        className="fotoProducto"
        src={item.pictureURL}
        alt={item.title}
      ></img>
      <div className="descProducto">
        <h2>
          {item.id} - {item.category} {item.brand}
        </h2>
        <p>{item.description.slice(0, 50)}...</p>
        <p className="itemPrice">USD {item.price}</p>
        <Link className="linkItem" to={`/item/${item.id}`}>
          Ver Detalle
        </Link>
        <ItemCount item={item} initial={0} stock={10} onAdd={handOnAdd} />
      </div>
    </div>
  );
};

export default Item;
