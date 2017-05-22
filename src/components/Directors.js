import React from 'react';
import { directors } from '../data';

const Directors = () => {
  // const directorName = directors.name.map((name, i) => <ul key={i}>{name}</ul>)

  return (
    <div>
    <h1>Directors Page</h1>
      {directors.map((director, i) =>
         <div key={i}>
           <h1>Name: {director.name}</h1>
           <h2>Movies</h2>
           <ul>
            {director.movies.map((movie, i) =>
            <li key={i}>{movie}</li>
            )}
           </ul>
           </div>
         )}
       </div>
  )
}
export default Directors;
