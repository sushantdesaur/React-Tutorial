import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css'

// setup vars
const author = 'J.K. Rowling'
const title = "Harry Potter and the Philosopher's Stone"

function BookList() {
  return (<>
    <section className="booklist">
      <Book></Book>
    </section>
  </>)
}

const Book = () => {  
  return (<article className="book">
    <img src="https://images-na.ssl-images-amazon.com/images/I/5160dwNeqSL._SX323_BO1,204,203,200_.jpg" alt="" />
    <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
  </article>)
};

ReactDOM.render(<BookList/>, document.getElementById('root'));
