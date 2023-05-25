import Image from "next/image";
import React from "react";
import fetch from "node-fetch";
import Movie from "./movie";
import { useState, useEffect } from "react";

export default async function Home() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=" +
    process.env.Movie_API_KEY;
  const options = { method: "GET", headers: { accept: "application/json" } };
  const [movies, setMovies] = useState();

  var otherMovies: any;
  var moviesList: any;

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => {
      setMovies(json);
      otherMovies = json;
      moviesList = otherMovies.results;
      // console.log(otherMovies.results);
    })
    .catch((err) => console.error("error:" + err));

  console.log(moviesList);

  return (
    <div>
      <p>This is the Home page of our software</p>
      {}
      {moviesList.map((movie, index) => {
        return (
          <Movie
            title={movie.title}
            id={movie.id}
            overview={movie.overview}
            popularity={movie.popularity}
            releaseDate={movie.release_date}
            index={index + 1}
          />
        );
      })}
    </div>
  );
}
