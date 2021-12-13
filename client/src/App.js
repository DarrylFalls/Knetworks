import './App.css';
import Layout from './components/Layout/Layout';
import {Routes, Route} from 'react-router-dom'
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import Welcome from './screens/Welcome/Welcome';
import Categories from './screens/Categories/Categories';
import CategoryQuestions from './screens/CategoryQuestions/CategoryQuestions';
import QuestionDetail from './screens/QuestionDetail/QuestionDetail';
import CreateQuestion from './screens/CreateQuestion/CreateQuestion';
import {useState, useEffect} from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [users, setUsers] = useState('')
  const [user, setUser] = useState('')
  const [toggle, setToggle] = useState(true)
  return (
    <div className="App">
      <Layout loggedIn={loggedIn}>
        <Routes>
          <Route path='/' exact element={<Home loggedIn={loggedIn}/>} />
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>} />
          <Route path='/sign-up' element={<SignUp setLoggedIn={setLoggedIn}/>} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:id' element={<CategoryQuestions loggedIn={loggedIn}/>} />
          <Route path='/question/:id' element={<QuestionDetail loggedIn={loggedIn}/>} />
          <Route path='/post_question' element={<CreateQuestion loggedIn={loggedIn}/>} />
        </Routes>
      </Layout>
    </div>
  );
}


export default App;
