import React, { useState } from "react";
import styles from "./AddCars.module.css";
import axios from "axios";
import Swal from "sweetalert2";
function AddCars() {
  const [formData, setFormData] = useState({
    carName: "",
    imageLink: "",
    price: "",
    fuel: "",
    engineCapacity: "",
    seats: "",
    transmission: "",
    airBags: "",
    type: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://attryb-backend-pom7.onrender.com/add-car`, formData)
      .then((res) => {
        if ((res.data = "cart updated")) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Saved Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    setFormData({
      carName: "",
      imageLink: "",
      price: "",
      fuel: "",
      engineCapacity: "",
      seats: "",
      transmission: "",
      airBags: "",
      type: "",
      rating: "",
    });
  };

  return (
    <div className={styles.carDetailsContainer}>
      <h1 id={styles.heading}>Enter Car Details</h1>
      <form onSubmit={handleSubmit}>
        <div id={styles.formSection}>
          <div>
            <div className={styles.formGroup}>
              <label htmlFor="carName">Car Name:</label>
              <input
                type="text"
                id="carName"
                name="carName"
                value={formData.carName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="imageLink">Image Link:</label>
              <input
                type="text"
                id="imageLink"
                name="imageLink"
                value={formData.imageLink}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="fuel">Fuel:</label>
              <input
                type="text"
                id="fuel"
                name="fuel"
                value={formData.fuel}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="engineCapacity">Engine Capacity:</label>
              <input
                type="text"
                id="engineCapacity"
                name="engineCapacity"
                value={formData.engineCapacity}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className={styles.formGroup}>
              <label htmlFor="seats">Seats:</label>
              <input
                type="text"
                id="seats"
                name="seats"
                value={formData.seats}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="transmission">Transmission:</label>
              <input
                type="text"
                id="transmission"
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="airBags">Air Bags:</label>
              <input
                type="text"
                id="airBags"
                name="airBags"
                value={formData.airBags}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="type">Type:</label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="rating">Rating:</label>
              <input
                type="text"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <button id={styles.subBtn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddCars;
