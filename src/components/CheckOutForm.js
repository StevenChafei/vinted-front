import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const CardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(CardElement, {
        name: "l'ID de l'acheteur",
      });
      console.log(stripeResponse);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <input type="submit" value="Acheter" />
    </form>
  );
};

export default CheckOutForm;
