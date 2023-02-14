import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckOutForm from "../components/CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;

  const fraisProtectionEnPlus = ((10 / 100) * price.price).toFixed(2);
  const fraisProtection = (10 / 100) * price.price;
  const fraisEnvoiEnPlus = ((20 / 100) * price.price).toFixed(2);
  const fraisEnvoi = (20 / 100) * price.price;
  const total = price.price + fraisProtection + fraisEnvoi;
  const frais = fraisProtection + fraisEnvoi;

  return (
    <div className="offer">
      <div className="page-detail">
        <div className="payement-container">
          <div className="title-buy">
            <h4>Résumé de la commande</h4>
          </div>
          <div className="content-buy">
            <div className="resum-order">
              <div className="resum-order-detail">
                <span>Commande :</span>
                <span>{price.price}€</span>
              </div>

              <div className="resum-order-detail">
                <span>Frais protection acheteurs :</span>
                <span>{fraisProtectionEnPlus}€</span>
              </div>

              <div className="resum-order-detail">
                <span>Frais de port :</span>
                <span> {fraisEnvoiEnPlus}€</span>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="content-buy">
            <div className="resum-order-total">
              <span>Total :</span>
              <span> {total}€</span>
            </div>
          </div>
          <div className="divider"></div>
          <div>
            <div className="content-buy">
              <p>
                Il ne vous reste plus qu'un étape pour vous offrir{" "}
                <span>{title.name}</span>. Vous allez payer{" "}
                <span>{frais}€ </span>
                (frais de protection et frais de port inclus).
              </p>
            </div>
            <Elements stripe={stripePromise}>
              <CheckOutForm />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
