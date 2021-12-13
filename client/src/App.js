import './App.css';
import Layout from './components/Layout/Layout';
import {Routes, Route} from 'react-router-dom'
import Home from './screens/Home/Home';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' exact='/' element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
