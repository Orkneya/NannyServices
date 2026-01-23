import React from "react";
import styles from "./Home.module.css";
import childrenImg from "../../assets/images/children.webp";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          Make Life Easier <br /> for the Family:
        </h1>

        <p className={styles.subtitle}>
          Find Babysitters Online for All Occasions
        </p>

        <NavLink to="/nannies" className={styles.btn}>
          Get Started Search Nanny
          <span className={styles.arrow}>↗</span>
        </NavLink>
      </div>

      <div
        className={styles.right}
        style={{ backgroundImage: `url(${childrenImg})` }}
      />
    </section>
  );
}
