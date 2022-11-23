// Componente de carrito y cantidad de productos marcados, falta automatizar el contador
// ya que este es un numero fijo

import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className="carrito">
      <img src="./images/cartWidget.png" alt="Carrito" />
      <p>10</p>
    </div>
  );
};

export default CartWidget;
