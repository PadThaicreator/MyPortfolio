// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* http://localhost:5173/ */}
          <Route path="portfolio" element={<Portfolio />} /> {/* http://localhost:5173/about */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
