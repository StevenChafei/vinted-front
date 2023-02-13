import axios from "axios";
import { useState } from "react";

const Publish = ({ token }) => {
  console.log(token);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      formData.append("picture", picture);
      //   formData.append("title", title);
      //   formData.append("description", description);
      //   formData.append("condition", condition);
      //   formData.append("price", price);
      //   formData.append("city", city);
      //   formData.append("brand", brand);
      //   formData.append("color", color);
      //   formData.append("size", size);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      //   console.log(token);
      //   console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container">
      <div className="publish">
        <h3> Vends ton article</h3>

        <form onSubmit={handleSubmit}>
          <div className="sell-article">
            <input
              type="file"
              title="foo"
              placeholder="Ajoute une photo"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setPicture(event.target.files[0]);
              }}
            />
          </div>

          <div className="first-description">
            <div className="article">
              <label for="name">Titre </label>
              <input
                value={title}
                type="text"
                name="Titre"
                placeholder="ex : Chemise Sézane"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>

            <div className="article">
              <label for="name">Décris ton article</label>
              <input
                value={description}
                type="text"
                name="Décris ton article"
                placeholder="ex : porté quelquefois, taille coorectemment"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="second-description">
            <div className="article">
              <label for="name">Marque </label>
              <input
                value={brand}
                type="text"
                placeholder="ex : Zara"
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </div>

            <div className="article">
              <label for="name">Taille</label>
              <input
                value={size}
                type="text"
                placeholder="ex : L / 40 / 12"
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </div>

            <div className="article">
              <label>Couleur</label>
              <input
                value={color}
                type="text"
                placeholder="ex : Rose / Noir"
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </div>
            <div className="article">
              <label for="name">Etat</label>
              <input
                value={condition}
                type="text"
                placeholder="ex : Neuf avec étiquette"
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </div>
            <div className="article">
              <label for="name">Lieu</label>
              <input
                value={city}
                type="text"
                placeholder="ex : Paris"
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="third-description">
            <div className="price-article">
              <label for="name">Prix</label>
              <input
                value={price}
                type="text"
                placeholder="ex : 0.00€"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
            <div className="exchange-article">
              <input type="checkbox"></input>
              <p>Je suis intéressé(e) par les échanges</p>
            </div>
          </div>
          <div className="add-article">
            <input className="submit" type="submit" value="Ajouter" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publish;
