const Login = () => {
  return (
    <div className="formulaire">
      <form>
        <h2>Se connecter</h2>
        <label className="forms">
          <br />
          <input type="email" name="email" placeholder="Email" /> <br />
          <input type="password" name="password" placeholder="Mot de passe" />
          <br />
        </label>
        <input className="submit" type="submit" value="Se connecter" /> <br />
        <a href="/signup">Pas encore de compte ? Inscris-toi !</a>
      </form>
    </div>
  );
};

export default Login;
