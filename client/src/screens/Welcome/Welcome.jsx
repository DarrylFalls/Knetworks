import { Link } from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
  return (
    <div>
      <div className='welcome-display-div'>
      <div className='welcome-title'>
        Welcome to Knetworks
        </div>
        <br/>
      <div>
        We’re happy you’ve decided to join our community to contribute to our knowledge network. We love having members who are as passionate about learning as we are. But before we go any further, we have some rules:
        </div>
        <br/>
      <div>
        This is not a place to argue with strangers. This is a place for learning and growth. And when it is needed, we have civil debates where the goal isn’t to beat someone. The goal is to find the truth.
        </div>
        <br/>
      <div>
        Accept that you can be wrong. Nobody knows everything. Which means you are wrong about something, and by definition you will not know what that thing is. So be open to the ideas of others, and when you disagree, be kind about it.
        </div>
        <br/>
      <div>
        Help out where ever you can. Ultimately, we want to make the world a better and smarter place one question at a time.
        </div>
        <br/>
      <div>
        <Link to='/' className='accept-link'>I Accept the Rules</Link>
        </div>
        </div>
    </div>
  )
}

export default Welcome