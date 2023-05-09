import "./Book.css";

function Book(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      <img src={props.image} />
    </div>
  );
}

export default Book;
