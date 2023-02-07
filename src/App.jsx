import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Layout from './Layout';
import NoPage from './pages/NoPage';
import Experience from './pages/Experience';
import '../src/styles/App.css'

function App() {
  return (
    <div className='all'>
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
    </div>
  );
}

export default App;
