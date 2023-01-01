import "./CartPage.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, getPrecioTotal } = useContext(CartContext);

  const total = getPrecioTotal();

  return (
    <div>
      <h2>Carrito</h2>
      {cart.map((item) => {
        return (
          <div key={item.id} className="bloqueCart">
            <h2>{item.category}</h2>
            <h2>{item.brand}</h2>
            <h2>{item.name}</h2>
            <h2>$ {item.price}</h2>
            <h2>quantity: {item.cantidad}</h2>
            <h2>Subtotal: {item.price * item.cantidad}</h2>
            <button onClick={() => removeFromCart(item.id)}>
              Eliminar producto
            </button>
          </div>
        );
      })}

      <h3>Total: ${total}</h3>

      <Link className="linkCart" to="/checkout">
        Checkout
      </Link>
    </div>
  );
};

export default CartPage;
