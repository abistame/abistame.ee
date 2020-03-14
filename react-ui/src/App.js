import React from 'react';
import { RegisterForm } from './components/registerForm'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import LoginPage from './components/LoginPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <RegisterForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
