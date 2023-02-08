import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Layout from './components/Layout';
import NoPage from './NoPage';
import Experience from './Experience';
import '../styles/App.css'

function App() {
  return (
    <div className='body'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='projects' element={<Projects />} />
              <Route path='experience' element={<Experience />} />
              <Route path='*' element={<NoPage />} />
            
          </Route>
        </Routes>
      </HashRouter>
      </div>
  );
}

export default App;
