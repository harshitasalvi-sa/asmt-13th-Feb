import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Spells from './pages/Spells';
import Characters from './pages/Characters';
import Houses from './pages/Houses';
import './App.css';
import Home from "./pages/Home"

function App() {
  return (
    <div className="app-background min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/books" element={<Books />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/houses" element={<Houses />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
