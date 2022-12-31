// Componente de carrito y cantidad de productos marcados, falta automatizar el contador
// ya que este es un numero fijo

import "./CartWidget.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {getCantidad} = useContext (CartContext)

  const cantidadTotal = getCantidad()

  return (
    <div className="carrito">
      <img src="./images/cartWidget.png" alt="Carrito" />
      <p>{cantidadTotal}</p>
    </div>
  );
};

export default CartWidget;
