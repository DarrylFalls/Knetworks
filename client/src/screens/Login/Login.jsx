import {Link, Navigate} from 'react-router-dom'
import { login } from '../../services/utils'
import {useState} from 'react'

const Login = ({ setLoggedIn, setUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [navigate, setNavigate] = useState(false)

  const { email, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const submitUser = await login(formData)
    if (submitUser) {
      setUser(submitUser)
      setLoggedIn(true)
      console.log(submitUser)
      setNavigate(true)
    }
  }

  if (navigate == true) {
    return <Navigate to='/'/>
  }

  return (
    <div>
      <div>
        <div>Login</div>
        <form onSubmit={handleSubmit} >
          <label>email</label>
          <br/>
          <input type='text' name='email' value={email} onChange={handleChange} />
          <br />
          <label>password</label>
          <br/>
          <input type='text' name='password' value={password} onChange={handleChange} />
          <br />
          <input type='submit' value='Login' />
        </form>
      </div>
      <div>
        <Link to='/sign-up'>
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Login