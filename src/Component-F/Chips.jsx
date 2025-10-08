import React from 'react'


const Chips = (props) => {
    const styles = {
        backgroundColor: props.backgroundColor,
        color: props.color
    }
  return (
    <div style={styles} >
        <h4
        className='chip'
        >{props.language}</h4>
    </div>
  )
}

export default Chips