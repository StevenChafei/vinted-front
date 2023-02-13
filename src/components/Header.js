import logo from "../assets/img/logovinted.png";
import { Link } from "react-router-dom";

const Header = ({ handleToken, userToken }) => {
  return (
    <div>
      <header className="content">
        <Link to="/">
          <img src={logo} alt="logo vinted" />
        </Link>

        <div className="searchBar">
          <form>
            <input type="search" placeholder="Rechercher des articles..." />
          </form>
        </div>

        <div>
          {!userToken ? (
            <>
              <Link to="/signup">
                <button>S'inscrire</button>
              </Link>
              <Link to="/login">
                <button>Se connecter</button>
              </Link>
            </>
          ) : (
            <button
              className="deconnexion"
              onClick={() => {
                handleToken();
              }}
            >
              Déconnexion
            </button>
          )}
        </div>
        <Link to="/publish">
          <button className="sellButton">Vends tes articles</button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
