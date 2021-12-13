import Menu from "../HamburgerMenu/HamburgerMenu"
import {Link} from 'react-router-dom'

const Nav = ({loggedIn}) => {
  return (
    <div>
      <div><Menu /></div>
      <div><Link to='/'>Knetworks</Link></div>
      <div><Link to='/login'>Login/Sign Up</Link></div>
    </div>
  )
}

export default Nav