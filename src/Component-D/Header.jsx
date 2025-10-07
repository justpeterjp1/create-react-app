import trollFace from "./trollface-f.png"

 const Header = () => {
   return (
    <div className='header'>
        <img className='logo' src={trollFace} alt="trollFace" />
        <h1>Meme Generator</h1>
    </div>

    
  )
}

export default Header