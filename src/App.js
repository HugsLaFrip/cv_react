import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home'
import { Knowledge } from './pages/Knowledge'
import { Contact } from './pages/Contact'
import { Portfolio } from './pages/Portfolio'
import { NotFound } from './pages/NotFound'
import { Navigation } from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navigation />}>
          <Route exact="true" path='/' element={<Home />} />
          <Route path='/competences' element={<Knowledge />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
