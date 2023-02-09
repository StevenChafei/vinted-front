import logo from "../assets/img/vinted_logo.png";

const Header = () => {
  return (
    <div>
      <header className="content">
        <a href="/">
          {" "}
          <img src={logo} alt="logo vinted" />
        </a>

        <div className="searchBar">
          <form>
            <input type="search" placeholder="Rechercher des articles" />
          </form>
        </div>

        <div>
          <a href="/signup">
            <button>S'inscrire</button>
          </a>
          <a href="/login">
            <button>Se connecter</button>
          </a>
        </div>
        <button className="sellButton">Vends tes articles</button>
      </header>
    </div>
  );
};

export default Header;
