import logo from "../assets/img/vinted_logo.png";
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
            <input type="search" placeholder="Rechercher des articles" />
          </form>
        </div>

        <div>
          {!userToken ? (
            <>
              {" "}
              <Link to="/signup">
                <button>S'inscrire</button>
              </Link>
              <Link to="/login">
                <button>Se connecter</button>
              </Link>{" "}
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
        <button className="sellButton">Vends tes articles</button>
      </header>
    </div>
  );
};

export default Header;
