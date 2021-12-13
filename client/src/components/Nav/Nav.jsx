import Menu from "../HamburgerMenu/HamburgerMenu"
import {Link} from 'react-router-dom'

const Nav = ({loggedIn}) => {
  return (
    <div>
      <Menu />
      <div>Navbar</div>
      <Link to='/login'>Login/Sign Up</Link>
    </div>
  )
}

export default Nav