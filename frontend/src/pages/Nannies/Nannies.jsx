import React, { useState } from "react";
import styles from "./Nannies.module.css";
import { nannies } from "../../mocks/nannies.js";
import NannyCard from "../../components/NannyCard/NannyCard.jsx";

export default function Nannies() {
  const STEP = 3;

  const [visibleCount, setViosibleCount] = useState(STEP);

  const visibleNannies = nannies.slice(0, visibleCount);

  const handleLoadMore = () => {
    setViosibleCount((prev) => prev + STEP);
  };

  return (
    <div>
      {visibleNannies.map((nanny, index) => (
        <NannyCard key={index} nanny={nanny} />
      ))}
      <div className={styles.btn_wrapper}>
        {visibleCount < nannies.length && (
          <button className={styles.btn_load} onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
