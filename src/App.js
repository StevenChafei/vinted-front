import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Pages

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";

// Components
import Header from "./components/Header";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [search, setSearch] = useState("");

  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 14 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Header
        handleToken={handleToken}
        userToken={userToken}
        search={search}
        setSearch={setSearch}
      />

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/publish" element={<Publish userToken={userToken} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
