import React from 'react';

function SimpleComponent() {
  let name = ['cloting','footwear','watches','bags'];
  let varname= name.map((name,index)=>{
     return <div key={index}>{name}</div>;
  });
   
  return (
    <div className='my-2 '>
      <h3>Upto 60% off | Styles for Men</h3>
      <div className='grid grid-cols-2 gap-2'>{varname}</div>
      <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
    </div>
  );
}

export default SimpleComponent;

