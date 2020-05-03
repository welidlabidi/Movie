import React from "react";
import Cards from "./cards";

const CardsList = ({ results, genree }) => {
  return (
    <div className="style">
      <div
        className="row"
        style={{ justifyContent: "space-evenly", width: "100%" }}
      >
        {results.map((result) => (
          <Cards
            key={result.id}
            id={result.id}
            title={result.original_title}
            backdrop_path={result.backdrop_path}
            img={result.poster_path}
            overview={result.overview}
            original_language={result.original_language}
            vote_average={result.vote_average}
            release_date={result.release_date}
            genre={result.genre_ids}
          />
        ))}
      </div>
    </div>
  );
};
export default CardsList;
