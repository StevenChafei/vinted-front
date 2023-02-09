import { useState, useEffect } from "react";
import axios from "axios";
import OfferCard from "../components/OfferCard";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, []);

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
          <button className="startSell">Commencer à vendre</button>
        </div>
      </div>

      <div>
        {data.offers.map((offer) => {
          return <OfferCard offerInfos={offer} key={offer._id} />;
        })}
      </div>

      {/* <Link>
        <article>
          <section className="try">
            {data.offers.map((offer, index) => {
              console.log(offer);

              return (
                <div>
                  <div key={offer._id}>
                    <div className="owner">
                      {offer.owner.account.avatar && (
                        <img
                          className="avatar"
                          style={{
                            height: 25,
                            width: 25,
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                          src={offer.owner.account.avatar.secure_url}
                          alt="owner"
                        />
                      )}
                      <span className="username">
                        {offer.owner.account.username}
                      </span>
                    </div>
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
        </article>
      </Link> */}
    </main>
  );
};

export default Home;
