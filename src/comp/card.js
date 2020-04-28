import React from "react";
import Cards from "./cards";

const CardsList = ({ results }) => {
  return (
    <div className="style">
      <div className="row" style={{ justifyContent: "space-evenly" }}>
        {results.map((result) => (
          <Cards result={result} />
        ))}
      </div>
    </div>
  );
};
export default CardsList;
