import React from "react";
import styles from "./ReviewCard.module.css";
import StarIcon from "../../assets/icons/star.svg";

export default function ReviewCard({ review }) {
  const firstLetter = review.reviewer.charAt(0).toUpperCase();

  return (
    <div className={styles.review}>
      <div className={styles.header}>
        <div className={styles.avatar}>{firstLetter}</div>

        <div className={styles.content}>
          <p className={styles.name}>{review.reviewer}</p>

          <div className={styles.rating}>
            <img src={StarIcon} alt="star" />
            <span>{Number(review.rating).toFixed(1)}</span>

            {/* <span>{review.rating}</span> */}
          </div>
        </div>
      </div>
      <p className={styles.comment}>{review.comment}</p>
    </div>
  );
}
