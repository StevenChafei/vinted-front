// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  // State qui me sert à récupérer la data
  const [data, setData] = useState();
  // State qui me sert à savoir si la data a été récupérée
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Je déclare la fonction qui fait la requête
    const fetchData = async () => {
      // Ma requête peut échouer donc je la place dans un try catch
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        // Je stocke le résultat dans data
        setData(response.data);
        // Je fais paser isLoading à false
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    // J'appelle ma fonction
    fetchData();
  }, []);

  return <h1>Je suis la page Home</h1>;
};

export default Home;
