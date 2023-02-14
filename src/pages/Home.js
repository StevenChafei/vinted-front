import { useState, useEffect } from "react";
import axios from "axios";
import OfferCard from "../components/OfferCard";
import { Link } from "react-router-dom";

const Home = ({ search }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`
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
    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <div className="heropics">
        <img
          className="home-hero-forme"
          src="https://lereacteur-vinted.netlify.app/static/media/tear.884480420945b3afd77b44a6c5f98567.svg"
          alt="forme"
        ></img>

        <div className="block">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          <Link to="/publish">
            <button className="startSell">Commencer à vendre</button>
          </Link>
        </div>
      </div>

      <div className="parent">
        {data.offers.map((offer) => {
          return <OfferCard offerInfos={offer} key={offer._id} />;
        })}
      </div>
    </main>
  );
};

export default Home;
