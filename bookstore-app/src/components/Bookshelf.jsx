import BookListing from "./BookListing";
import './../App.css';

const Bookshelf = ( {books} ) => {
  return (
    <>
      {books.map(( book , index ) => {
        return <BookListing key={index} title={book.title} author={book.author} price={book.price}/>
      })}
    </>
  );
}
export default Bookshelf;