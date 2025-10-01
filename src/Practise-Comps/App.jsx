// App file to render practise components
// To view this project render contents of this file in App.jsx located in src
import Joke from "./Joke"
import jokesData from "./jokesData"
import { Fragment } from 'react'
// import CatA from "./assets/cat-a.jpg"
// import CatB from "./assets/cat-b.jpg"
// import CatC from "./assets/cat-c.jpg"
// import CatD from "./assets/cat-d.jpg"

const App = () => {
    // if (Joke.setup === "" && Joke.punchline !== "") {
    //     return Joke.punchline
    const jokeElements = jokesData.map((joke) => {
        return <Joke 
        setup={joke.setup || null} 
        punchline={joke.punchline}  />
    }) ;   
  
    
  return (
    <Fragment>
        <h1 className="joke-header">Jokes App</h1>
        <h2>Here are a few jokes to make you laugh</h2>
            <p>Hope you enjoy them!</p>
        <div className="joke-container">
            {jokeElements}
           
        </div>
          
    </Fragment>
  )
}

export default App