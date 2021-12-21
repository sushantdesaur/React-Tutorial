import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
  return <h4>This is Sushant and this my first component</h4>;
}

ReactDOM.render(<Greeting></Greeting>, document.getElementById('root'))