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

export default function FiltersDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("A to Z");

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Filters</p>

      <div className={styles.select} onClick={() => setIsOpen((prev) => !prev)}>
        <span>{selected}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>
          ▼
        </span>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {OPTIONS.map((option) => (
            <div
              key={option}
              // className={styles.option}
              className={`${styles.option} ${option === selected ? styles.selected : ""}`}
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
