import React, { useState } from "react";

const Card = ({ name, gender, species, image, status}) => {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    console.log("hice click");
    setFavorite(!false);
  };

  return (
    <div className="card p-2 m-3" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body bg-dark text-white">
        <h5 className="card-title">Nombre: {name}</h5>
        <p className="card-text">Genero: {gender}</p>
        <p>Especie: {species}</p>
        <p>Estado: {status}</p>

        <button className="btn btn-success" onClick={handleClick}>
          {favorite ? "Agregado" : "Agregar a favoritos ❤"}
        </button>
      </div>
    </div>
  );
};

export default Card;
