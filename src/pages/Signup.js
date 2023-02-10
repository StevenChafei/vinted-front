import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Signup = () => {
  return (
    <div className="formulaire">
      <form>
        <h2>S'inscrire</h2>
        <label className="forms">
          <input type="text" name="username" placeholder="Nom d'utilisateur" />
          <br />
          <input type="email" name="email" placeholder="Email" /> <br />
          <input type="password" name="password" placeholder="Mot de passe" />
          <br />
        </label>
        <div className="newsletter">
          <div className="checkbox">
            <input
              type="checkbox"
              class="jss152"
              value="top"
              data-indeterminate="false"
            ></input>
            <p>S'inscrire à la newsletter</p>
            <br />
          </div>
        </div>
        <div className="text-newsletter">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </div>
        <input className="submit" type="submit" value="S'inscrire" /> <br />
        <a href="/login">Tu as déjà un compte ? Connecte-toi !</a>
      </form>
    </div>
  );
};

export default Signup;
