import React, { useState } from "react";
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

      {visibleCount < nannies.length && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
}
