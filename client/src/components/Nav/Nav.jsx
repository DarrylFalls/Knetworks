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
    <div>
      {/* <div><Menu /></div> */}
      {loggedIn && <div>
        <Link to='/post-question'>Ask A Question</Link>
      </div>}
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