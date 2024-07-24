import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    const fetchDirectors = async () => {
      try {
        const response = await fetch("http://localhost:4000/directors"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch directors");
        }
        const data = await response.json();
        setDirectors(data); // Update directors state with fetched data
      } catch (error) {
        console.error("Error fetching directors:", error);
      }
    };

    fetchDirectors();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director, index) => (
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
