import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username,
          email,
          password,
          newsletter,
        }
      );
      console.log(response.data);
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="formulaire">
      <form onSubmit={handleSubmit}>
        <h2>S'inscrire</h2>
        <label className="forms">
          <input
            value={username}
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
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
        <div className="newsletter">
          <div className="checkbox">
            <input
              checked={newsletter}
              value={newsletter}
              type="checkbox"
              onChange={(event) => {
                setNewsletter(!newsletter);
              }}
            ></input>
            <p>S'inscrire à la newsletter</p>
          </div>
        </div>
        <div className="text-newsletter">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </div>
        <input className="submit" type="submit" value="S'inscrire" />
        <Link to="/login">Tu as déjà un compte ? Connecte-toi ! </Link>
      </form>
    </div>
  );
};

export default Signup;
