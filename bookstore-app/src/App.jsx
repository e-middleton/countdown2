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

      <br/>
      {/* <BookListing title="hello" author="author" price="price"/> */}
      <div className="bookshelf">
        {fiction ? bookData["fiction"].map(( book , index ) => {
          return <BookListing key={index} title={book.title} author={book.author} price={book.price}/>
        }) : ""}
      </div>
      <br/>
      <div className="bookshelf">
        {nonFiction ? bookData["non-fiction"].map(( book , index ) => {
          return <BookListing key={index} title={book.title} author={book.author} price={book.price}/>
        }) : ""}
      </div>

      <br/>
      <div className="bookshelf">
        {children ? bookData["children"].map(( book , index ) => {
          return <BookListing key={index} title={book.title} author={book.author} price={book.price}/>
        }) : ""}
      </div>
    </>
  )
}

export default App
