import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const handOnAdd = (cantidad, id) => {
    console.log("Cantidad " + cantidad);
  };

  return (
    <div>
      <img
        src={item?.pictureURL}
        alt={item?.title}
      ></img>
      <div>
        <h2>
          {item.id} - {item.category} {item.brand}
        </h2>
        <p>{item.description}</p>
        <p className="itemPriceDetail">USD {item.price}</p>
        <ItemCount item={item} initial={0} stock={10} onAdd={handOnAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
