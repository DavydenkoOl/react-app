import React, { useState } from 'react';

const Example = () => {
    const [i, setI] = useState(1); 
    
   const decrement =()=>{
    setI(i-1);

   }
    const increment = () => {
        setI(i+1);
    }
    return (
        <div>
          <button onClick={decrement}>-</button> 
          {i}
          <button onClick={increment}>+</button>
        </div>
    );
}

export default Example;
