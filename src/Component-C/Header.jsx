
import chef from "./chef.png"

const Header = () => {
  return (
    <div className='header'>
        <img className='header-logo' src={chef} alt="chef-claude" />
        <h1 className='header-text'>Chef Claude</h1>
    </div>
  )
}

export default Header