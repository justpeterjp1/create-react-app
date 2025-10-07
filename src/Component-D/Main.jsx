import React from 'react'
import "./App.css"
import memeImage from "./meme-a.jpeg"

const Main = () => {
     const [newMeme, setNewMeme] = React.useState({
        topText: 'One does not asssume',
        bottomText: 'just give it to me',
        imageURL: `${memeImage}`
      })

      function handleChange(event) {
       const {name, value} = event.currentTarget
         setNewMeme(prev => ({
            ...prev,
            [name]: value
         }))
      }
      const [allMemes, setAllMemes] = React.useState([])
      React.useEffect( () => {
        fetch(`https://api.imgflip.com/get_memes`)
        .then(response => response.json([]))
        .then(data => {
            console.log(data.data.memes)
            setAllMemes(data.data.memes)}
            )
        
    }, [])

    function getMemeImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length )
         const randomMemeURL = allMemes[randomIndex].url
          setNewMeme(prev => ({
                ...prev, imageURL: randomMemeURL} )
            )}
    

  return (
    <section>
        <div className='form'>
            <label htmlFor="topText">Top Text
                <input 
                id='topText'
                 placeholder={newMeme.topText}
                 name='topText'
                type="text" 
                onChange={handleChange}
                />

            </label>

            <label htmlFor="bottomText">Bottom Text
                <input 
                id="bottomText"
                 placeholder={newMeme.bottomText}
                 name='bottomText'
                type="text"
                onChange={handleChange}
                 />
            </label>
        </div>
        <button onClick={getMemeImage} className='newImagebtn'>Get a new meme Image</button>
        <div className="meme">
            <img
        className='newImage'
        src={newMeme.imageURL} 
        alt="newImage" />
        <span className="top">{newMeme.topText}</span>
        <span className="bottom">{newMeme.bottomText}</span>
        </div>
        
    </section>
  )
}
export default Main