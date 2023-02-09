import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages

import Home from "./pages/Home";
import Offer from "./pages/Offer";

// Components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />

      <div className="heropics">
        <img
          className="home-hero-forme"
          src="https://lereacteur-vinted.netlify.app/static/media/tear.884480420945b3afd77b44a6c5f98567.svg"
          alt="forme"
        ></img>
        <div className="block">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          <button className="startSell">Commencer à vendre</button>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/offer">Offer</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
