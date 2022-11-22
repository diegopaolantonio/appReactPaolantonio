import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="row encabezado">
      <div className="col-xl-4 col-md-4 col-sm-4 logo">
        <img src={'./images/leonExperto.png'} alt="logo" />
        <p className="titulo">EXPERTO INGENIERIA</p>
      </div>
      <div className="col-xl-4 col-md-4 col-sm-4 botones">
            <button>Inicio</button>
            <button>Servicios</button>
            <button>Productos</button>
            <button>Contacto</button>
      </div>
      <div className="col-xl-4 col-md-4 col-sm-4 login">
        <CartWidget />
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
