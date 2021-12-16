import {useState} from 'react'
import { signUp } from '../../services/utils';
import { Navigate } from 'react-router-dom'
import './SignUp.css'

const SignUp = ({setUser, setLoggedIn, setUserToggle, userToggle}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const { username, email, password } = formData
  const [navigate, setNavigate] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = await signUp(formData)
    if (newUser) {
      setUser(newUser)
      setLoggedIn(true)
      setUserToggle(!userToggle)
      setNavigate(true)
    } else {
      alert('Credentials Invalid')
    }
  }

  if (navigate) {
    return <Navigate to='/welcome'/>
  }

  return (
    <div>
      <div className='sign-up-display-div'>
      <form onSubmit={handleSubmit} className='sign-up-form'>
      <h3 className='sign-up-title'>Sign Up</h3>
      <label>
        username:
          </label>
          <br/>
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      
      <br />
      <label>
        email:
          </label>
          <br/>
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
      
      <br />
      <label>
        password:
          </label>
          <br/>
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      
      <br />
      <button>Create Account</button>
        </form>
        </div>
    </div>
  )
}

export default SignUp