import './App.css';
import SideNav from './components/SideNav';
import NavButton from './components/NavButton';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Course from './pages/Course';
import About from './pages/About';

function App() {
  const sideNavButtons = [{name:"Home", url:"/"},{name:"Courses", url:"/courses"},{name:"About", url:"/about"}];

  return (
    <Router>
      <div id='parent-div'>
        <div className='navigation-parent'>
          <SideNav>
              {sideNavButtons.map((button, i) => (
                  <NavButton key={button.name} title={button.name} url={button.url}/>
              ))}
          </SideNav>
        </div>
        <div className='head-content-parent'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/courses' element={<Course/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
