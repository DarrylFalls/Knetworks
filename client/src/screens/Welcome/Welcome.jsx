import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <div>
        Welcome to Knetworks
      </div>
      <div>
        We’re happy you’ve decided to join our community to contribute to our knowledge network. We love having members who are as passionate about learning as we are. But before we go any further, we have some rules:
      </div>
      <div>
        This is not a place to argue with strangers. This is a place for learning and growth. And when it is needed, we have civil debates where the goal isn’t to beat someone. The goal is to find the truth.
      </div>
      <div>
        Accept that you can be wrong. Nobody knows everything. Which means you are wrong about something, and by definition you will not know what that thing is. So be open to the ideas of others, and when you disagree, be kind about it.
      </div>
      <div>
        Help out where ever you can. Ultimately, we want to make the world a better and smarter place one question at a time.
      </div>
      <div>
        <Link to='/'>I Accept the Rules</Link>
      </div>
    </div>
  )
}

export default Welcome