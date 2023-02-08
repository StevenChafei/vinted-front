import logo from "../assets/img/vinted_logo.png";

const Header = () => {
  return (
    <div>
      <header className="content">
        <img src={logo} alt="logo vinted" />

        <div className="searchBar">
          <form>
            <input type="search" placeholder="Rechercher des articles" />
          </form>
        </div>

        <div>
          <button>S'inscrire</button>
          <button>Se connecter</button>
        </div>
        <button className="sellButton">Vends tes articles</button>
      </header>
    </div>
  );
};

export default Header;
