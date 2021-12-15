import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className='home-text-div-1'>Bringing people together through the power of learning and teamwork, in order to make the world a better and smarter place.</div>
      <div className='home-text-div-2'>
        <div className='home-sub-text-div-1'>Knetworks is a place to ask questions and bring ideas together.</div>
        <div className='home-sub-text-div-2'>Need help understanding a concept, or just curious? Create an account, and ask a question to get help from other users.</div>
      </div>
      
        <Link to='/categories' className='home-category-link'><div className='home-category-link-div'>Pick a category to see questions that have already been posted</div></Link>
      
      
    </div>
  )
}

export default Home