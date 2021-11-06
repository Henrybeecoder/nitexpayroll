import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bannersidebars from './components/Sidebars/bannersidebars';
import LoginScreen from './components/Login_logic_model/login_screen'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginScreen />}>

        </Route>
      </Routes>
    </Router>

  );
}

export default App;
