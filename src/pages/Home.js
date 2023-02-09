// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import bannerwide from

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

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      {/* <section className="megabanner-container"> */}
      {/* <img alt="Vinted megabanner" src={Home} /> */}
      {/* </section> */}

      <section className="try">
        {data.offers.map((offer, index) => {
          console.log(offer);

          return (
            <div>
              <div key={offer._id}>
                <span className="username">{offer.owner.account.username}</span>
                <img
                  className="test"
                  src={offer.product_image.secure_url}
                  alt=""
                />
                <span>{offer.product_price} €</span> <br />
                <span className="brand">
                  <span className="size">
                    {offer.product_details[1].TAILLE}
                  </span>{" "}
                  <br />
                  {offer.product_details[0].MARQUE}
                </span>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};
// return <h1>Je suis la page Home</h1>;

export default Home;
