import React from 'react'

const Joke = ({setup, punchline}) => {
  const [isShown, setIsShown] = React.useState(false);
      function btnClick () {
         setIsShown(prevShown => !prevShown)
      }
      console.log(isShown)
    const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])
   
  return (
    <div className='joke'>
      <h3>Joke Component</h3>
      { setup &&  <p>{setup}</p>}
      { isShown ? <p><strong>{punchline}</strong></p> : null}
      <button
        onClick={btnClick}
        >{isShown ? <span>Hide Punchline</span> : <span>Show punchline</span>}</button>
        <div>
        </div>
        <div>
          {unreadMessages.length > 0  && <h1>You have {unreadMessages.length} unread messages!</h1>}
        </div>
    </div>
  )
}

export default Joke