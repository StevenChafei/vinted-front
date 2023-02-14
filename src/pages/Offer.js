import { useEffect, useState } from "react";
import axios from "axios";
import { /* Link,*/ useParams, useNavigate } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  // Je récupère l'id présent dans l'url
  const params = useParams();
  const id = params.id;
  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="offer">
      <div className="offer-container">
        <div className="pics">
          <img src={data.product_image.secure_url} alt="product" />
        </div>
        <div className="offer-info">
          <p className="prix-article">{data.product_price} €</p>
          {/* Je parcours product_details */}
          {data.product_details.map((detail, index) => {
            // Je récupère le nom de la clef de detail
            console.log(detail);
            const key = Object.keys(detail)[0];

            return (
              <div className="key" key={index}>
                {/* J'affiche le nom dela clef  */}
                <span className="key-search">{key} : </span>
                {/* et son contenu */}
                <span className="key-result">{detail[key]}</span>
              </div>
            );
          })}
          <p className="name-article">{data.product_name}</p>
          <p className="desc-article">{data.product_description}</p>
          <div className="avatar-article">
            {data.owner.account.avatar && (
              <img
                className="avatar"
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                src={data.owner.account.avatar.secure_url}
                alt="owner"
              />
            )}
            <span>{data.owner.account.username}</span>
          </div>
          <div className="buy-article">
            <button
              onClick={() => {
                const name = data.product_name;
                const price = data.product_price;
                navigate("/payment", {
                  state: { title: { name }, price: { price } },
                });
              }}
            >
              Acheter
            </button>
            {/* </Link>

            <Link
              to="/payment"
              state={{
                title: { name },
                price: { price },
              }}
            >
              Acheter
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
