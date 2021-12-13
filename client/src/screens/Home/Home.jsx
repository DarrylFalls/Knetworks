import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div>home page</div>
      <Link to='/categories'>Pick a category</Link>
    </div>
  )
}

export default Home