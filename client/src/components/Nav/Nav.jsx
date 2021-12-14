import Menu from "../HamburgerMenu/HamburgerMenu"
import {Link, useNavigate} from 'react-router-dom'
import { signOut } from "../../services/utils"
import {useState} from 'react'

const Nav = ({ loggedIn, setLoggedIn, user }) => {
  const [navigateToggle, setNavigateToggle] = useState(false)
  const navigate = useNavigate()
  const handleLogout = () => {
    signOut()
    setLoggedIn(false)
    setNavigateToggle(true)
  }

  if (navigateToggle) {
    navigate('/')
    setNavigateToggle(false)
  }
  return (
    <div>
      <div><Menu /></div>
      <div><Link to='/'>Knetworks</Link></div>
      {loggedIn ?
        <div>
          <div>{user.username}</div>
          <div onClick={handleLogout}>Logout</div>
        </div>
        : <div><Link to='/login'>Login/Sign Up</Link></div>}
    </div>
  )
}

export default Nav