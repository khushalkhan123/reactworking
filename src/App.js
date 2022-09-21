import Home from './Pages/home';
import SideBar from './Pages/nosidebar';
import SinglePost from './Pages/Singlepost';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return(
  <div className="App">
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sidebar' element={<SideBar />} />
      <Route path='/singlepost' element={<SinglePost />}></Route>
    </Routes>
  </Router>

  </div>
  );
}

export default App;
