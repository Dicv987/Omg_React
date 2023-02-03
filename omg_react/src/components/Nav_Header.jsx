import { Link } from "react-router-dom";
import "./css/NavHeader.css"

export function NavHeader() {
  return (
    <nav className="navcontainer">
      <ul className="ulcontainer">
        <Link to={"/"} >
          <li>
            <p>Inicio</p>
          </li>
        </Link>
        <Link to={"/Ventajas"}>
          <li>
            <p>Quienes somos</p>
          </li>
        </Link>
        <Link to={"/Ventajas"}>
          <li>
            <p>Ventajas</p>
          </li>
        </Link>
        <Link to={"/Ventajas"}>
          <li>
            <p>Productos</p>
          </li>
        </Link>
        <Link to={"/Ventajas"}>
          <li>
            <p>Contactos</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
