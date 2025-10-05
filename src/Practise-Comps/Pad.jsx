import React from 'react'
import "./app.css"

const Pad = (props) => {
  
  return (
    <div className='pads-container'>
        <button 
        onClick={() => props.toggle(props.id)}
        className={`pads ${props.on ? ' on' : ''}`}
        style={{backgroundColor: props.color}} ></button>
    </div>
  )
}

export default Pad