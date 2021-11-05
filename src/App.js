import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bannersidebars from './components/Sidebars/bannersidebars';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Bannersidebars />}>

        </Route>
      </Routes>
    </Router>

  );
}

export default App;
