import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Publish = ({ userToken }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("condition", condition);
      formData.append("price", price);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("color", color);
      formData.append("size", size);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return userToken ? (
    <div className="container">
      <div className="publish">
        <h3> Vends ton article</h3>

        <form onSubmit={handleSubmit}>
          <div className="sell-article">
            {/* {picture && <img src={URL.createObjectURL(picture)} alt="pics" />} */}
            <label className="picture-article">
              <input
                type="file"
                onChange={(event) => {
                  // console.log(event.target.files[0]);
                  setPicture(event.target.files[0]);
                }}
              />
              + Ajoute une photo
            </label>
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
              <textarea
                className="textarea-article"
                value={description}
                rows="10"
                cols="30"
                type="text"
                name="Décris ton article"
                placeholder="ex : porté quelquefois, taille correctemment"
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
              <input className="checkbox-article" type="checkbox"></input>
              <p>Je suis intéressé(e) par les échanges</p>
            </div>
          </div>
          <div className="add-article">
            <input className="submit" type="submit" value="Ajouter" />
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Navigate to="/login " />
  );
};

export default Publish;
