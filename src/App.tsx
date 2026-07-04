import { Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import DocPage from './pages/DocPage';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/docs/:slug" element={<DocPage />} />
      </Routes>
    </>
  );
}