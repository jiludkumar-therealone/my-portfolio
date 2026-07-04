import { Route, Routes } from 'react-router-dom';
import DocPage from './pages/DocPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/docs/:slug" element={<DocPage />} />
    </Routes>
  );
}