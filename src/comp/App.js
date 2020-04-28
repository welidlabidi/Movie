import React, { useState } from "react";
import axios from "axios";
import CardsList from "./card";
import Input from "./input";
import "../app.css";

const App = () => {
  const apiKey = "fac34116c639f3e75cd5205251be421c";
  const api = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;

  const [movies, setMovies] = useState({
    query: "",
    result: [],
  });

  const handle = (e) => {
    let s = e.target.value;
    setMovies((prevState) => {
      return { ...prevState, query: s };
    });
  };

  const search = (e) => {
    axios(api + `&query=` + movies.query).then(({ data }) => {
      let result = data.results;
      setMovies((prevState) => {
        return { ...prevState, result: result };
      });
    });
    e.preventDefault();
  };

  return (
    <div>
      <div className="header">
        <div
          className="row"
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1>Quarantine Movies</h1>
          <Input handle={handle} search={search} />
        </div>
      </div>
      {console.log(movies)}
      <div className="">
        <CardsList key={movies.id} results={movies.result} />
        {console.log(movies)}
      </div>
    </div>
  );
};

export default App;
