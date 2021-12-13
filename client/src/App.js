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

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:id' element={<CategoryQuestions />} />
          <Route path='/question/:id' element={<QuestionDetail />} />
          <Route path='/post_question' element={<CreateQuestion />} />
        </Routes>
      </Layout>
    </div>
  );
}


export default App;
