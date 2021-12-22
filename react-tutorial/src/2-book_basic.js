import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css';

function BookList() {
  return (<>
    <section className="booklist">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  </>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image/>
      <Title/>
      <Author/>
    </article>
  )
}

const Image = () => {
  return (
    <>
    <img src="https://images-eu.ssl-images-amazon.com/images/I/5160dwNeqSL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
    </>  
  )  
}

const Title = () => {
  return (
    <>
      <h1>
        Harry Potter and the Philosopher's Stone
      </h1>
    </>
  )
}

const Author = () => {
  return (
    <>
      <h4 style={{color: '#617d98', fontSize:'0.75rem', marginTop: '0.25rem'}}>J.K. Rowling</h4>
    </>
  )
}

ReactDOM.render(<BookList/>, document.getElementById('root'));