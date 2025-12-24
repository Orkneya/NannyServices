import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoPrimary}>Nani</span>
        <span className={styles.logoSecondary}>Services</span>
      </div>

      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/nannies" className={styles.link}>
          Nannies
        </NavLink>
      </nav>

      <div className={styles.auth}>
        <button className={styles.authBtn}>Login</button>
        <button className={styles.authBtn}>Registration</button>
      </div>
    </header>
  );
}
