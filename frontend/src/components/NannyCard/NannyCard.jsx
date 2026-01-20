import React from "react";
import { useState } from "react";
import styles from "./NannyCard.module.css";
import HeartIcon from "../../assets/icons/HeartIcon.jsx";
import MapIcon from "../../assets/icons/map-pin.svg";
import StarIcon from "../../assets/icons/star.svg";
import CalculateAge from "../../utils/calculeteAge.jsx";

export default function NannyCard({
  nanny,
  isFavorite,
  onToggleFavorite,
  user,
  onRequireAuth,
}) {
  const age = CalculateAge(nanny.birthday);

  const handleFavoriteClick = () => {
    if (!user) {
      onRequireAuth();
      return;
    }

    onToggleFavorite();
    // setIsFavorite((prev) => !prev);
  };

  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <img src={nanny.avatar_url} alt={nanny.name} />
      </div>

      <div className={styles.info}>
        <div className={styles.head}>
          <p className={styles.nanny}>Nanny</p>
          <div className={styles.headInfa}>
            <div className={styles.infoBlock}>
              <img src={MapIcon} alt="map" className={styles.icon} />
              <p>{nanny.location}</p>
            </div>
            <div className={styles.infoBlock}>
              <img src={StarIcon} alt="star" className={styles.icon} />
              <p>Rating: {nanny.rating}</p>
            </div>
            <div className={styles.infoBlock}>
              <p>
                Price/ 1 hour:
                <span className={styles.prise}> ${nanny.price_per_hour}</span>
              </p>
            </div>
          </div>
          <button
            className={styles.favoriteBtn}
            onClick={handleFavoriteClick}
            aria-pressed={isFavorite}
          >
            <HeartIcon
              className={`${styles.heartIcon} ${
                isFavorite ? styles.filled : ""
              }`}
            />
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
