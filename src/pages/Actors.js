   import React, { useEffect, useState } from "react";
   import NavBar from "../components/NavBar";

   function Actors() {
     const [actors, setActors] = useState([]);

     useEffect(() => {
       const fetchActors = async () => {
         try {
           const response = await fetch("http://localhost:4000/actors"); // Replace with your API endpoint
           if (!response.ok) {
             throw new Error("Failed to fetch actors");
           }
           const data = await response.json();
           setActors(data); // Update actors state with fetched data
         } catch (error) {
           console.error("Error fetching actors:", error);
         }
       };

       fetchActors();
     }, []);

     return (
       <main>
         <NavBar />
         <h1>Actors Page</h1>
         {actors.map((actor) => (
           <article key={actor.id}>
             <h2>{actor.name}</h2>
             <ul>
               {actor.movies.map((movie) => (
                 <li key={movie}>{movie}</li>
               ))}
             </ul>
           </article>
         ))}
       </main>
     );
   }

   export default Actors;