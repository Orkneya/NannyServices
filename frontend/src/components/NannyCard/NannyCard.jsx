import React from "react";
import styles from "./NannyCard.module.css";

export default function NannyCard({ nanny }) {
  return (
    <div className={styles.card}>
      <img src={nanny.avatar_url} alt={nanny.name} />
      <h3>{nanny.name}</h3>
      <p>{nanny.about}</p>
      <p>Experience: {nanny.experience}</p>
      <p>Price: ${nanny.price_per_hour}/hour</p>
      <p>Rating: {nanny.rating}</p>
      <button>Read more</button>
      <button>♡</button>
    </div>
  );
}
