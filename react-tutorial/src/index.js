import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css'

// setup vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/5160dwNeqSL._SX323_BO1,204,203,200_.jpg',
  title: "Harry Potter and the Philosopher's Stone",
  author:'J.K. Rowling',  
};

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51F7MMxbhOL._SX324_BO1,204,203,200_.jpg',
  title: "Harry Potter and the Chamber of Secrets",
  author:'J.K. Rowling',  
};

const thirdBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51WMfnxFXaL._SX322_BO1,204,203,200_.jpg',
  title: "Harry Potter and the Prisoner of Azkaban",
  author:'J.K. Rowling',  
};

const fourthBook = {
  img: 'https://d5i0fhmkm8zzl.cloudfront.net/9780545582957_harry_potter_and_the_goblet_of_fire_0_0.jpg',
  title: "Harry Potter and the Goblet of Fire",
  author:'J.K. Rowling',  
};
function BookList() {
  return (<>
    <section className="booklist">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}></Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}></Book>
      <Book img={thirdBook.img} title={thirdBook.title} author={thirdBook.author}></Book>
      <Book img={fourthBook.img} title={fourthBook.title} author={fourthBook.author}></Book>
    </section>
  </>);
};

const Book = (props) => {  
  return (<article className="book">
    <img src={props.img} alt="" style={{width:300, height: 450}}/>
    <h1>{props.title}</h1>
    <h4>{props.author.toUpperCase()}</h4>
  </article>)
};

ReactDOM.render(<BookList/>, document.getElementById('root'));
