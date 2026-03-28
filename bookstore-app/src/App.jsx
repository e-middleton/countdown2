import './App.css'
import { useState } from 'react'
import BookListing from './components/BookListing';
import GenreSelector from './components/GenreSelector';

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



function App() {
  const [fiction, setFiction] = useState(false);
  const [nonFiction, setNonFiction] = useState(false);
  const [children, setChildren] = useState(false);

  // for (let i = 0; i < 3; i++) {
  //   console.log(bookData["fiction"][i].title);
  // }
  const fict = bookData["fiction"].map(( book, index) => {
    return {
      ...book,
      id: index
    }});
  console.log(fict);
  
  console.log(Array.isArray(bookData["fiction"]));

  return (
    <> 
      <button onClick={() => setFiction(prevState => !prevState)}> 
        {fiction ? "hide fiction" : "show fiction"}
      </button>
      <button onClick={() => setNonFiction(prevState => !prevState)}>
        {nonFiction ? "hide non-fiction" : "show non-fiction"}
      </button>
      <button onClick={() => setChildren(prevState => !prevState)}>
        {children ? "hide children" : "show children"}
      </button>

      {/* <GenreSelector/> */}
      {/* <BookListing title="hello" author="author" price="price"/> */}
      {bookData["fiction"].map(( book , index ) => {
        // Pass the whole object or individual properties to the component
        return <BookListing key={index} title={book.title} author={book.author} price={book.price}/>
      })}
    </>
  )
}

export default App
