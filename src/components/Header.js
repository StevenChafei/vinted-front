import logo from "../assets/img/logovinted.png";
import { Link } from "react-router-dom";

const Header = ({ handleToken, userToken, search, setSearch }) => {
  return (
    <div>
      <header className="content">
        <Link to="/">
          <img src={logo} alt="logo vinted" />
        </Link>

        <div className="searchBar">
          <form>
            <input
              value={search}
              type="search"
              placeholder="Rechercher des articles..."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </form>
        </div>

        <div>
          {!userToken ? (
            <>
              <Link to="/signup">
                <button className="signup-button">S'inscrire</button>
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
        <Link to={userToken ? "/publish" : "/"}>
          <button className="sellButton">Vends tes articles</button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
