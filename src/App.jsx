import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Layout from './Layout';
import NoPage from './pages/NoPage';
import Experience from './pages/Experience';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  // library.add(faGithub, faLinkedin);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='experience' element={<Experience />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
