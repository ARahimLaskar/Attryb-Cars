import React, { useContext, useEffect, useState } from "react";
import styles from "./CarsCard.module.css";
import axios from "axios";
import { myContext } from "../Context/carsContext";
export const CarsDetailpage = () => {
  const { carData } = useContext(myContext);
  console.log(carData);

  return (
    <div className={styles.card}>
      <div className={styles.imgDiv}>
        <h2>{carData.name}</h2>
        <img src={carData.image} alt="" />
      </div>
      <div className={styles.descriptionSection}>
        <p>Type: {carData.type}</p>
        <p>Transmission: {carData.Transmission}</p>
        <p>Air Bags: {carData.air_bags}</p>
        <p>Fuel Type: {carData.fuel}</p>
        <p>Engine Capacity: {carData.engine_capacity}</p>
        <p>Price: {carData.price}</p>
        <p>Rating: {carData.rating}</p>
      </div>
    </div>
  );
};
