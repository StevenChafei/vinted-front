import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: "l'ID de l'acheteur",
        amount: 10,
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      console.log(stripeToken);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,

          title: "Le Titre de l'annonce",
          amount: 10,
        }
      );
      if (response.data === "succeeded") {
        setCompleted(true);
        setIsLoading(false);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="add-number-card" />

      {completed ? (
        <p>Paiement effectué</p>
      ) : (
        <button className="final-pay" disabled={isLoading} type="submit">
          Pay
        </button>
      )}
    </form>
  );
};

export default CheckOutForm;
