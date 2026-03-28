import './../App.css'

const BookListing = ({title, author, price}) => {
  return (
    <>
      <div className="book">
        <h1>{title}</h1>
        <br/>
        <p>{author}</p>
        <p>{price}</p>
      </div>
    </>
  );
}
export default BookListing