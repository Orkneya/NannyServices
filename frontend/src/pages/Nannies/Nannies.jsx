import React from "react";
import { nannies } from "../../mocks/nannies.js";
import NannyCard from "../../components/NannyCard/NannyCard.jsx";

export default function Nannies() {
  return (
    <div>
      <h1>Nannies Page</h1>
      {nannies.map((nanny, index) => (
        <NannyCard key={index} nanny={nanny} />
      ))}
    </div>
  );
}
