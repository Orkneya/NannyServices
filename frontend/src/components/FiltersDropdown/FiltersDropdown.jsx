import { useState } from "react";
import styles from "./FiltersDropdown.module.css";

const OPTIONS = [
  "A to Z",
  "Z to A",
  "Less than $10",
  "Greater than $10",
  "Popular",
  "No Popular",
  "Show all",
];

export default function FiltersDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Filters</p>

      <div className={styles.select} onClick={() => setIsOpen((prev) => !prev)}>
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
  );
}
