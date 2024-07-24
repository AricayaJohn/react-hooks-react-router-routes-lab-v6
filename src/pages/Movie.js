import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.log(`Failed to load movie due to ${error}`));
  }, [id]);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  const { title, time, genres } = movie;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{title}</h1>
        <p>Time: {time}</p>
        <div>
          Genres:
          {genres.map((genre) => (
            <span key={genre}> {genre} </span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;