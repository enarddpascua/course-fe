import './App.css';
import Head from './components/Head';
import Content from './components/Content';
import SideNav from './components/SideNav';
import NavButton from './components/NavButton';
import ContentCard from './components/ContentCard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Course from './pages/Course';
import About from './pages/About';

function App() {
  const sideNavButtons = [{name:"Home", url:"/"},{name:"Course", url:"/course"},{name:"About", url:"/about"}];

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
            <Route path='/course' element={<Course/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
