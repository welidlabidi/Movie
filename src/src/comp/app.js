import React, { useState, useEffect } from "react";
import axios from "axios";
import CardsList from "./card";
import Input from "./input";
import MainImage from "./mainimage";
import "../app.css";

const App = () => {
  const apiKey = "fac34116c639f3e75cd5205251be421c";
  const api = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&genre_id=28`;
  const latestMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
  const [currentPage, setCurrentPage] = useState(1);
  const [btn, setBtn] = useState("Load More...");
  const [lm, setLm] = useState("Latest Movies");
  const [topImage, setTopImage] = useState([]);
  const [movies, setMovies] = useState({
    query: "",
    result: [],
  });

  useEffect(() => {
    axios(latestMovies).then(({ data }) => {
      setTopImage(data.results.slice(0, 5));
    });
  }, [latestMovies]);

  useEffect(() => {
    axios(latestMovies).then(({ data }) => {
      let result = data.results;
      setMovies((prevState) => {
        return { ...prevState, result: result };
      });
    });
  }, [latestMovies]);

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
    setLm("");
    setBtn();
  };

  useEffect(() => {
    const newPage = latestMovies;
    fetchNewPage(newPage);
  }, [latestMovies]);

  const fetchNewPage = (path) => {
    axios(path).then(({ data }) => {
      let result = data.results;
      setMovies((prevState) => {
        return { ...prevState, result: result };
      });
      setCurrentPage(data.page);
    });
  };

  const load = () => {
    const newPage = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${currentPage +
      1}`;
    fetchNewPage(newPage);
  };

  return (
    <div>
      <div className="top" style={{ width: "100%" }}>
        <MainImage key={topImage.id} topImage={topImage} />
      </div>
      <div className="header">
        <div
          className="row"
          style={{
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1>Quarantine Movies</h1>
          <Input handle={handle} search={search} />
        </div>
      </div>

      <div className="">
        <div className="latestM">
          <p className="latest">{lm}</p>
        </div>
        <CardsList
          key={movies.id}
          genre={movies.genre}
          results={movies.result}
        />

        <div className="loadbutton">
          <button className="loadmore" onClick={load}>
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
