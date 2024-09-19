import React from 'react';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import GuessImageGame from './pages/Games.jsx';
import Lesson from './pages/Lesson.jsx';
import { AnimatePresence } from 'framer-motion';
import Materi from './pages/Materi.jsx';
import PuzzleGame from './pages/PuzzleGame.jsx';

const Main = () => (
  <AnimatePresence>

  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/belajar" element={<GuessImageGame />} />
      <Route path="/materi" element={<Lesson />} />
      <Route path="/materi1" element={<Materi />} />
      <Route path="/puzle" element={<PuzzleGame />} />
    </Routes>
  </Router>
  </AnimatePresence>
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Main />
  </React.StrictMode>
)
