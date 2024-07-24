import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie,setMovie] = useState(null);
  const params = useParams();
  const movieId = params.id
  
useEffect(() => {
  fetch(`http://localhost:4000/movies/${movieId}`)
  .then(res => res.json())
  .then(data => setMovie(data))
  .catch(error => console.log(`Failed to load movie due to ${error}`))
}, [movieId])

if(!movie){
  return <h1>Loading...</h1>
}

const {title, time, genres} = movie
 {movie.genres.map(genre => <span key={genre}> {genre} </span>)}

  return (
    <>
      <header>
        {/* What component should go here? */}
        < NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1> {title} </h1>
        <p> Time:{time} </p>
        {genres.map(genre => <span key={genre}> {genre} </span>)}
      </main>
    </>
  );
};

export default Movie;