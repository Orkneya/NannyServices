import React from "react";
import styles from "./NannyCard.module.css";
import HeartIcon from "../../assets/icons/HeartIcon.jsx";
import CalculateAge from "../../utils/calculeteAge.jsx";

export default function NannyCard({ nanny }) {
  const age = CalculateAge(nanny.birthday);
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <img src={nanny.avatar_url} alt={nanny.name} />
      </div>

      <div className={styles.info}>
        <div className={styles.head}>
          <p>Nanny</p>
          <p>{nanny.location}</p>
          <p>Rating: {nanny.rating}</p>
          <p>Price: ${nanny.price_per_hour}/hour</p>
          <button className={styles.favoriteBtn}>
            <HeartIcon />
          </button>
        </div>
        <h3 className={styles.name}>{nanny.name}</h3>
        <div className={styles.age}>
          <p>Age: {age}</p>
          <p>Experience: {nanny.experience}</p>
          <p>Kids age: {nanny.kids_age}</p>
          <p>Characters: {nanny.characters}</p>
          <p>Education: {nanny.education}</p>
        </div>
        <p className={styles.light_color}>{nanny.about}</p>
      </div>
    </div>
  );
}
