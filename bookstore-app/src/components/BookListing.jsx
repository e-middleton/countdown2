import './../App.css'

const BookListing = ({title, author, price}) => {
  return (
    <>
      <div className="book">
        Title: {title} 
        <br/>
        author: {author}
        <br />
        price: ${price}
        <br/>
      </div>
    </>
  );
}
export default BookListing