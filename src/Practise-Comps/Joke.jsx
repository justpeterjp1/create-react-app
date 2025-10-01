import React from 'react'

const Joke = ({setup, punchline}) => {
  return (
    <div className='joke'>
        <h3>Joke Component</h3>
        <p>{setup}</p>
        <p><strong>{punchline}</strong></p>
        <div>

        </div>
    </div>
  )
}

export default Joke