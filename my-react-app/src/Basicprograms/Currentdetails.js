import React from 'react';
import ReactDOM from 'react-dom/client';

function Currentdetails(props) {
  return <h2>I am a { props.brand }!</h2>;
}

const myElement = <Currentdetails brand="Ford" />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

export default Currentdetails;