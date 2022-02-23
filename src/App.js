import './App.scss';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import {Route, Routes} from 'react-router-dom';
import MySkills from './Pages/MySkills';
import MyWorks from './Pages/MyWorks';
import Contact from './Pages/ContactPage';
import MyEducation from './Pages/MyEducation';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <Navbar />
      </div>
      <div className='main-content'>
        <div className="content">
          <Routes>
            <Route path="/" exact="true" element={<HomePage />} />
            <Route path="/about" exact="true" element={<AboutPage />} />
            <Route path='/my-skills' exact="true" element={<MySkills />} />
            <Route path='/my-educations' exact="true" element={<MyEducation />} />
            <Route path='/my-works' exact="true" element={<MyWorks />} />
            <Route path='/contact' exact="true" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
