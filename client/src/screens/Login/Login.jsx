import {Link} from 'react-router-dom'
import { login } from '../../services/utils';

const Login = ({ setLoggedIn, setUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

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
      setUser(submitUser.user)
      setLoggedIn(true)
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>email</label>
          <input type='text' value={formData.email} onChange={handleChange} />
          <br />
          <label>password</label>
          <input type='text' value={formData.password} onChange={handleChange} />
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