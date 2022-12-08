// Componente para el Navbar, este utiliza el componente de botones y carrito para mostrar
// este es importado en App.js

import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="row encabezado">
      <div className="col-xl-4 col-md-4 col-sm-4 logo">
        <img src={"./images/leonExperto.png"} alt="Logo Empresa" />
        <h1 className="titulo">EXPERTO INGENIERIA</h1>
      </div>
      <div className="col-xl-4 col-md-4 col-sm-4">
        <Link to="/" className="botonNavegacion">
          Inicio
        </Link>
        <Link to="/category/PLC" className="botonNavegacion">
          PLC
        </Link>
        <Link to="/category/HMI" className="botonNavegacion">
          HMI
        </Link>
      </div>
      <div className="col-xl-4 col-md-4 col-sm-4 login">
        <CartWidget />
        <button className="botonLogin">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
