import React from 'react'
import "./App.css"
import Header from './Header'
import Main from "./Main"

const App = () => {
  const [newMeme, setNewMeme] = React.useState({
  })
  return (
    <div>
        <Header />
        <Main 
        topText={newMeme.topText}
        bottomText={newMeme.bottomText}
        image={newMeme.imageURL}
         />
      </div>
  )
}

export default App