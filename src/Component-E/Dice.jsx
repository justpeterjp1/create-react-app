import React from 'react'

const Dice = (props) => {
  return (
    <div>
        <button
        onClick={() => props.holdOneDice(props.id) }
        className={props.isHeld ? `held` : ''} 
        >{props.number}</button>
    </div>
  )
}

export default Dice