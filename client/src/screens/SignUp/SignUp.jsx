import {useState} from 'react'
import { signUp } from '../../services/utils';
import {Navigate} from 'react-router-dom'

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
      <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <label>
        Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default SignUp