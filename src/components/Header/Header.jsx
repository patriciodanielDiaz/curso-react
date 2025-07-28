import "./Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {

  const {user, logout} = useAuth();

  const handlerLogout = () => {
    logout();
  }

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/"><img src="/shopping-cart.svg" alt="logo" width="30" height="30"/></Link></li>
          {
          user && 
            <>
              
              <li><Link to="/admin">Admin</Link></li>
              <li><Link onClick={handlerLogout}>Cerrar sesion</Link></li>
            </>
          }
          {
          !user &&
            <>
              <li><Link to="/register">Registrar</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          }
        </ul>
      </nav>
    </header>
  );
}
export default Header;