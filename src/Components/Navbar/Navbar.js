import "./Navbar.css";
import logo from "./img/leon_experto.png";

const Navbar = () => {
  return (
    <nav className="row encabezado">
      <div className="col-xl-4 col-md-4 col-sm-4 logo">
        <img src={logo} alt="logo" />
        <p className="titulo">EXPERTO INGENIERIA</p>
      </div>
      <div className="col-xl-4 col-md-4 col-sm-4 botones">
            <a href="">Inicio</a>
            <a href="">Servicios</a>
            <a href="">Productos</a>
            <a href="">Contacto</a>
      </div>
      <div className="col-xl-4 col-md-4 col-sm-4 login">
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
