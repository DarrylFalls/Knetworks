import {Link, Navigate} from 'react-router-dom'
import { login } from '../../services/utils'
import { useState } from 'react'
import './Login.css'

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
      setNavigate(true)
    }
  }

  if (navigate == true) {
    return <Navigate to='/'/>
  }

  return (
    <div>
      <div className='login-display-div'>
      <div>
        <div className='login-title-div'>Login</div>
        <form onSubmit={handleSubmit} className='login-form'>
          <label>email:</label>
          <br/>
          <input type='text' name='email' value={email} onChange={handleChange} />
          <br />
          <label>password:</label>
          <br/>
          <input type='password' name='password' value={password} onChange={handleChange} />
          <br />
          <input type='submit' value='Login' />
        </form>
      </div>
      <div className='create-account-link-div'>
        <Link to='/sign-up'>
          Create Account
        </Link>
      </div>
        </div>
    </div>
  )
}

export default Login