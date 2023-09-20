import React, { useContext, useState } from "react";
import styles from "./CarsCard.module.css";
import { CarsDetailpage } from "./CarsDetailpage";
import { myContext } from "../Context/carsContext";
import { useNavigate } from "react-router-dom";

export const CarsCard = ({ item }) => {
  const { setcarData } = useContext(myContext);
  const navigate = useNavigate();
  const handleClick = () => {
    setcarData(item);
    navigate("/cars-details");
  };

  return (
    <div onClick={handleClick} className={styles.card}>
      <div className={styles.imgDiv}>
        <h2>{item.name}</h2>
        <img src={item.image} alt="" />
      </div>
      <div className={styles.descriptionSection}>
        <p>Type: {item.type}</p>
        <p>Transmission: {item.Transmission}</p>
        <p>Air Bags: {item.air_bags}</p>
        <p>Fuel Type: {item.fuel}</p>
        <p>Engine Capacity: {item.engine_capacity}</p>
        <p>Price: {item.price}</p>
        <p>Rating: {item.rating}</p>
      </div>
    </div>
  );
};
