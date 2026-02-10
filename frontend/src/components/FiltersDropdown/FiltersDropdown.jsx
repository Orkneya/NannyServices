import { useState } from "react";
import styles from "./FiltersDropdown.module.css";
import { Link, useLocation } from "react-router-dom";

const OPTIONS = [
  "A to Z",
  "Z to A",
  "Less than $10",
  "Greater than $20",
  "Popular",
  "No Popular",
  "Show all",
];

export default function FiltersDropdown({ value, onChange, user }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const location = useLocation();

  const isFavoritesPage = location.pathname === "/favorites";

  return (
    <>
      <div className={styles.favoriteWrap}>
        <p className={styles.label}>Filters</p>
        {user && (
          <Link
            to={isFavoritesPage ? "/nannies" : "/favorites"}
            className={`${styles.link} ${styles.linkForMobil}`}
          >
            {isFavoritesPage ? "Nannies" : "Favorites"}
          </Link>
        )}
      </div>
      <div className={styles.wrapper}>
        <div
          className={styles.select}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span>{value}</span>
          <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>
            ▼
          </span>
        </div>

        {isOpen && (
          <div className={styles.dropdown}>
            {OPTIONS.map((option) => (
              <div
                key={option}
                className={`${styles.option} ${option === value ? styles.selected : ""}`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
