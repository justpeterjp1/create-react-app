// App file to render practise components
// To view this project render contents of this file in App.jsx located in src
// import Joke from "./Joke"
// import jokesData from "./jokesData"
import { Fragment } from 'react'
import "./app.css"
// import CatA from "./assets/cat-a.jpg"
// import CatB from "./assets/cat-b.jpg"
// import CatC from "./assets/cat-c.jpg"
// import CatD from "./assets/cat-d.jpg"
// import avatar from './assets/avatar.png'
// import favIcon from './assets/fav-icon.png'
// import React from "react"
import { useState } from "react"
// import Count from "./Count"
import padsData from "./Pads"
import Pad from "./Pad"
const App = () => {
    // if (Joke.setup === "" && Joke.punchline !== "") {
    //     return Joke.punchline
    
    // const jokeElements = jokesData.map((joke) => {
    //     return <Joke 
    //     setup={joke.setup || null} 
    //     punchline={joke.punchline}  />
    // }) ;  

    // Learning state
    //  const [isGoingOut, setIsGoingOut] = useState(true)
    // const click = () => {
    //     setIsGoingOut(prevCount => !prevCount)
    // }
    // adding state to state button
    // const [isImportant, setIsImportant] = React.useState('Yes')
    // const [index, setIndex] = React.useState(0)
    // const handleClick = () => {
    //     const answers = ['No?', 'Definitely', 'maybe']
    //     setIsImportant(answers[index]);
    //     setIndex((prevIndex) => (prevIndex +1) % answers.length)
    // }
    // const [count, setCount] = React.useState(0);
    //  const add = () => {
    //     setCount(prevCount => prevCount + 1)
    //  }
    //  const minus = () => {
    //     if (count <= 0) {
    //         setCount(0)
    //     } else {
    //         setCount(prevCount => prevCount -1)
    //     }
    //  }
    // console.log(isImportant) 
//   ======= Favorite Things =======
//    const [favoriteThings, setFavoriteThings] = useState([]);
//    const allFavoriteThings = [
//     "Raindrops on roses",
//     "Whiskers on kittens",
//     "Bright copper kettles",
//     "Warm woolen mittens",
//     "Brown paper packages tied up with strings"
//    ]
//    const thingsElements = favoriteThings.map( (thing, index) => <p key={index}>{thing}</p> )
//    function addFavoriteThings() {
//     setFavoriteThings(prevFavThings => [...prevFavThings, "test"])
//    }
//    ========== Toggle with state =====
// const [contact, setContact] = useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (719) 555-1212",
//     email: "example@email.com",
//     isFavorite: false
// })
//     let starIcon = contact.isFavorite ? starFilled : starEmpty;
//     function toggleFavorite() {
//       setContact(prevCount => ({
//         ...prevCount, isFavorite: !prevCount.isFavorite
//       })) }
    const [pads, setPads] = useState(padsData)
    function toggle (id) {
        setPads(prevPads => prevPads.map(
            item => {
                return item.id === id ? {...item, on: !item.on} : item
            }
        ))
        }
   const buttonElements = pads.map(pad => (
    
    <Pad 
    className='pads' 
    id={pad.id}
    key={pad.id} 
    on={pad.on}
    color={pad.color} 
     toggle={toggle}
    />
   
   ))
    
  return (
    <Fragment>
        {/* <h1 className="joke-header">Jokes App</h1>
        <h2>Here are a few jokes to make you laugh</h2>
            <p>Hope you enjoy them!</p>
        <div className="joke-container">
            {jokeElements}
        </div> */}
        {/* Learning state */}
         {/* <h1 className='title'>Is state important to know?</h1>
                    <button
                    onClick={handleClick}
                    className="value">{isImportant}</button>
                    <div className="container">
                        <h1>How many times is the tutor going to say state in this section</h1>
                        <div className="counter">
                            <button 
                            onClick={minus}
                            className="minus" aria-label='minus-button'>-</button>
                            <Count 
                            number={count}
                            />
                            <button 
                            onClick={add}
                            className="plus" aria-label='add-button'>+</button>
                        </div>
                    </div> */}
            {/* DJ pad buttons */}
            <div className='pad-container'>
                {buttonElements}
            </div>
          
    </Fragment>
  )
}

export default App