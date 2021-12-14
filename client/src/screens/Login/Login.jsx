import {Link} from 'react-router-dom'

const Login = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  return (
    <div>
      <div>
        <form>
          <label>email</label>
          <input type='text' value={formData.email} onChange={handleChange} />
          <br />
          <label>password</label>
          <input type='text' value={formData.password} onChange={handleChange} />
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