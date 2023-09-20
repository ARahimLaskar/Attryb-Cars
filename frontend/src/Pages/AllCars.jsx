import axios from "axios";
import React, { useEffect, useState } from "react";
import { CarsCard } from "../Components/CarsCard";
import styles from "../Components/CarsCard.module.css";
export const AllCars = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://attryb-backend-pom7.onrender.com/products`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    console.log(data);
  }, []);
  return (
    <div className={styles.carsContainer}>
      {data?.map((e, i) => {
        return <CarsCard item={e} />;
      })}
    </div>
  );
};
