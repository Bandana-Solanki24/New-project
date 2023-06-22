import React, {useState} from 'react'

function ConditionalRendering() {
    const [message, setMessage]=useState(false);
    const buttonText=message ? "Hide":"show";
    
    function changeText(){
        setMessage(!message)
    }


  return (
    <div className="bg-container">
        <div className="card-container">
        {message ? <p>Text is visible</p> : <p>Text is hidden</p>}
            <button onClick={changeText}>{buttonText}</button>

        </div>
    </div>
  )
}

export default ConditionalRendering;