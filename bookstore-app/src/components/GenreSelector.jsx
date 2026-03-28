// import './..App.css'
import { useState } from 'react'
import BookListing from './BookListing'

const GenreSelector = () => {
  const genres = ["fiction", "nonfiction"];
  const {genre, setGenre} = useState("Fiction");

  function updateGenre(e){
    setGenre(e.target);
  }

  return (
    <>
      <select value={genre} onChange={updateGenre}>
        {/* Add a default/starting option */}
        <option value="Select a genre to View"> -- Select a Genre -- </option>
        
        {genres.map((val, index) => (
          <option key={index} value={val}>
            {val}
          </option>
        ))}
      </select>
    </>
  );
}
export default GenreSelector