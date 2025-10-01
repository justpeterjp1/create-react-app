import icon from "../Component-B/assets/globe-icon.png"
// import { ReactComponent as GlobeIcon } from '../Component-B/globe.svg';

//  <GlobeIcon className="header-icon" />

const Header = () => {
  return (
    <header className='header'>
    <img className="header-icon" src={icon} alt="icon" />
        <h2>My Travel Journal</h2>
    </header>
  )
}

export default Header