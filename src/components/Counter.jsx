import React, { useState } from 'react';
import "./counter.css"

function Counter() {
  const [count,setCount] = useState(0);
  const handlechange = (inc)=> {
    setCount(inc+count);
  }
  return (
    <div className={count%2===0 ? 'green' : "red"}>
      <p>Counter: {count}</p>
      <button onClick={()=> {handlechange(1)}}>Increament</button>
      <button onClick={()=> {handlechange(-1)}}>Decrement</button>
      <button onClick={()=> {setCount(count*2)}}>Double</button>
    </div>
  )
}

export default Counter