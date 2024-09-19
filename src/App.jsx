import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Menus from './components/Menus';
import { AnimatePresence, motion } from 'framer-motion';
import './assets/css/App.css'

function App() {
  return (
    
    <>
      <div id="app-bg" className="container-fluid d-flex flex-column justify-content-center">
        <h1 className="text-center text-white">Multimedia Interaktif</h1>
        <div className="row d-flex justify-content-center">
   
          <Menus />
          
        </div>
        
      </div>
    

    </>
  )
}

export default App
