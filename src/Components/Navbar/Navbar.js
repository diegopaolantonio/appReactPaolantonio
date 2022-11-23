// Componente para el Navbar, este utiliza el componente de botones y carrito para mostrar
// este es importado en App.js

import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import BotonNavbar from "../BotonNavbar/BotonNavbar";

const Navbar = () => {
  return (
    <nav className="row encabezado">
      <div className="col-xl-4 col-md-4 col-sm-4 logo">
        <img src={'./images/leonExperto.png'} alt="Logo Empresa" />
        <h1 className="titulo">EXPERTO INGENIERIA</h1>
      </div>
      <div className="col-xl-4 col-md-4 col-sm-4">
            <BotonNavbar colorBorde = "green" colorFondo = "lightgreen" >Inicio</BotonNavbar>
            <BotonNavbar colorBorde = "green" colorFondo = "lightgreen" >Servicios</BotonNavbar>
            <BotonNavbar colorBorde = "green" colorFondo = "lightgreen" >Productos</BotonNavbar>
            <BotonNavbar colorBorde = "green" colorFondo = "lightgreen" >Contacto</BotonNavbar>
      </div>
      <div className="col-xl-4 col-md-4 col-sm-4 login">
        <CartWidget />
        <BotonNavbar colorBorde = "black" colorFondo = "lightgray" >Login</BotonNavbar>
      </div>
    </nav>
  );
};

export default Navbar;
