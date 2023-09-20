import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpenMenu = () => {
    setmenuOpen(!menuOpen);
  };
  const handleLogin = () => {
    navigate("/login_signup");
  };

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("user_name");
    localStorage.removeItem("token");
  };

  let userName = localStorage.getItem("user_name");

  return (
    <div className={styles.header}>
      <NavLink to="/" id={styles.logo}>
        Attryb' cars
      </NavLink>
      <div className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        <NavLink className={styles.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navLink} to="/add-cars">
          Add Cars
        </NavLink>
        <p>Hi! {userName ? userName : "Guest"}</p>

        {userName ? (
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className={styles.logoutBtn} onClick={handleLogin}>
            Login
          </button>
        )}
      </div>

      <label className={styles.menuIcons}>
        {menuOpen ? (
          <span
            onClick={handleOpenMenu}
            id={styles.closeIcon}
            className="material-symbols-outlined"
          >
            close
          </span>
        ) : (
          <span
            onClick={handleOpenMenu}
            id={styles.menuIcon}
            className="material-symbols-outlined"
          >
            menu
          </span>
        )}
      </label>
    </div>
  );
};
