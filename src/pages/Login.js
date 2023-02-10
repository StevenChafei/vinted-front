import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email,
          password,
        }
      );
      handleToken(response.data.token);
      navigate("/");
      // console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="formulaire">
      <form onSubmit={handleSubmit}>
        <h2>Se connecter</h2>
        <label className="forms">
          <input
            value={email}
            type="email"
            name="email"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <input
            value={password}
            type="password"
            name="password"
            placeholder="Mot de passe"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <input className="submit" type="submit" value="Se connecter" />
        <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
      </form>
    </div>
  );
};

export default Login;
