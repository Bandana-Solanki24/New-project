

import React ,{useState} from 'react'
import './index.css'


function Counter() {
    const [count , setCount]=useState(0)
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
  return (
    <div className="bg-container">
        <p className="number">{count}</p>
        <div>
        <button className="button" onClick={increment}>Increase</button>
        <button className="button" onClick={decrement}>Decrease</button>
        </div>


    </div>
  )
}

export default Counter