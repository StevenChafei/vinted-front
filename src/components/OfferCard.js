import { Link } from "react-router-dom";

const OfferCard = ({ offerInfos }) => {
  return (
    <Link to={`/offer/${offerInfos._id}`}>
      <article className="try">
        <div>
          {offerInfos.owner.account.avatar && (
            <img
              className="avatar"
              style={{
                height: 25,
                width: 25,
                borderRadius: "50%",
                objectFit: "cover",
              }}
              src={offerInfos.owner.account.avatar.secure_url}
              alt="owner"
            />
          )}
          <span className="username">{offerInfos.owner.account.username}</span>
        </div>
        <img
          className="pictures"
          src={offerInfos.product_image.secure_url}
          alt="product"
          style={{ height: 400, width: 200, objectFit: "cover" }}
        />
        <p>{offerInfos.product_price} €</p>
        {/* <p> Taille : {offerInfos.product_details[1].TAILLE}</p> */}
        {/* Column-reverse permet d'inverser l'ordre de mes p */}
        <div /*</article>style={{ display: "flex", flexDirection: "column-reverse" }}*/
        >
          {offerInfos.product_details.map((detail, index) => {
            if (detail.TAILLE) {
              return <p key={index}>{detail.TAILLE}</p>;
            } else if (detail.MARQUE) {
              return <p key={index}>{detail.MARQUE}</p>;
            } else {
              return null;
            }
          })}
        </div>
      </article>
    </Link>
  );
};

export default OfferCard;
