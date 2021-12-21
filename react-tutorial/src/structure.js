import React from 'react';
import ReactDOM  from 'react-dom';


// Using JSX
const Greeting = () => {
    return  (
      <>
      <div className=''>
      <h3>Hello World</h3>
      <Person/>
      <Message/>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
        <img src="" alt="" />
        <input type="text" name="" id="" />
      </ul>
      </div>
      <div></div>
      </>
  );
};

const Person = () => <h2>John Doe</h2>;
const Message = () => {
  return <p>this is the Message</p>;
}

// Using function
// const Greeting = () => {
//   return React.createElement('div', 
//   {}, 
//   React.createElement('h1', {}, 'hello world'))
// }
ReactDOM.render(<Greeting></Greeting>, document.getElementById('root'));
