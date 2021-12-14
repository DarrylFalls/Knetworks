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
import { getCategories, getUsers, verify } from './services/utils';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [users, setUsers] = useState('')
  const [user, setUser] = useState('')
  const [categories, setCategories] = useState('')
  const [userToggle, setUserToggle] = useState(true)
  const [questionToggle, setQuestionToggle] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      const allUsers = await getUsers()
      setUsers(allUsers)
    }
    fetchUsers()
  }, [userToggle])

  useEffect(() => {
    const fetchCategories = async () => {
      const allCats = await getCategories()
      setCategories(allCats)
    }
    fetchCategories()
    const checkUser = async () => {
      const isUser = await verify()
      if (isUser) {
        setUser(isUser)
        setLoggedIn(true)
      }
    }
    checkUser()
  }, [])

  return (
    <div className="App">
      <Layout loggedIn={loggedIn} user={user} setLoggedIn={setLoggedIn}>
        <Routes>
          <Route path='/' exact element={<Home loggedIn={loggedIn}/>} />
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setUser={setUser}/>} />
          <Route path='/sign-up' element={<SignUp setLoggedIn={setLoggedIn} setUser={setUser} setUserToggle={setUserToggle} userToggle={userToggle} />} />
          <Route path='/welcome' element={<Welcome user={user}/>} />
          <Route path='/categories' element={<Categories categories={categories}/>} />
          <Route path='/categories/:id' element={<CategoryQuestions loggedIn={loggedIn} categories={categories}/>} />
          <Route path='/question/:id' element={<QuestionDetail loggedIn={loggedIn} user={user} users={users} />} />
          <Route path='/post-question' element={<CreateQuestion loggedIn={loggedIn} user={user} users={users} setQuestionToggle={setQuestionToggle} questionToggle={questionToggle} />} />
        </Routes>
      </Layout>
    </div>
  );
}


export default App;
