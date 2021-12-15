import Menu from "../HamburgerMenu/HamburgerMenu"
import {Link, useNavigate} from 'react-router-dom'
import { signOut } from "../../services/utils"
import {useState} from 'react'

const Nav = ({ loggedIn, setLoggedIn, user }) => {
  const [navigateToggleLogout, setNavigateToggleLogout] = useState(false)
  // const [navigateToggleQuestion, setNavigateToggleQuestion] = useState(false)

  const navigate = useNavigate()
  const handleLogout = () => {
    signOut()
    setLoggedIn(false)
    setNavigateToggleLogout(true)
  }

  if (navigateToggleLogout) {
    navigate('/')
    setNavigateToggleLogout(false)
  }

  // if (navigateToggleQuestion) {
  //   navigate('/post-question')
  //   setNavigateToggleQuestion(false)
  // }

  return (
    <div className='main-nav-div'>
      {/* <div className='nav-menu-button-div'><Menu /></div> */}
      {loggedIn && <div className='nav-post-question-link-div'>
        <Link to='/post-question'>Ask A Question</Link>
      </div>}
      <div className='nav-home-link-div'><Link to='/'>Knetworks</Link></div>
      {loggedIn ?
        <div className='nav-user-and-logout-display-div'>
          <div className='nav-username-div'>{user.username}</div>
          <div onClick={handleLogout} className='nav-logout-button-div'>Logout</div>
        </div>
        : <div className='nav-login-button-div'><Link to='/login'>Login/Sign Up</Link></div>}
    </div>
  )
}

export default Nav