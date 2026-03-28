import './../App.css'

const BookListing = ({title, author, price}) => {
  return (
    <>
      <div className="book">
        <h3>{title}</h3>
        <br/>
        <p> author: {author}</p>
        <p> price: ${price}</p>
      </div>
    </>
  );
}
export default BookListing