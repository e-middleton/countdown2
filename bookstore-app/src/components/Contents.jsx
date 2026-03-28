import Bookshelf from './Bookshelf';
import { useState } from 'react';
import './../App.css';

const bookData = {
  "fiction": [
    {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
    {"title": "1984", "author": "George Orwell", "price": 8.50},
    {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80}
  ],
  "non-fiction": [
    {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
    {"title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
    {"title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00}
  ],
  "children": [
    {"title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
    {"title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
    {"title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00}
  ]
};

const Contents = () => {

  const [fiction, setFiction] = useState(true);
  const [nonFiction, setNonFiction] = useState(true);
  const [children, setChildren] = useState(true);

  return (
    <>
    <div className="buttons">
      <button onClick={() => setFiction(prevState => !prevState)}> 
        {fiction ? "hide fiction" : "show fiction"}
      </button>
      <button onClick={() => setNonFiction(prevState => !prevState)}>
        {nonFiction ? "hide non-fiction" : "show non-fiction"}
      </button>
      <button onClick={() => setChildren(prevState => !prevState)}>
        {children ? "hide children" : "show children"}
      </button>
    </div>

      <br/>
      <h2>{fiction? "Fiction:" : ""} </h2>
      <div className="bookshelf">
        {fiction ? <Bookshelf books={bookData["fiction"]}/> : ""}
      </div>
      <br/>
      <h2>{nonFiction ? "Non-fiction:" : ""} </h2>
      <div className="bookshelf">
        {nonFiction ? <Bookshelf books={bookData["non-fiction"]}/> : ""}
      </div>
      <br/>
      <h2>{children ? "Children:" : ""} </h2>
      <div className="bookshelf">
        {children ? <Bookshelf books={bookData["children"]}/> : ""}
      </div>
    </>
  );
}
export default Contents;