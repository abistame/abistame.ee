import React from 'react';
import { RegisterForm } from './components/registerForm'
import './App.css'
import {
  Router,
  Switch,
  Route,
} from "react-router-dom"
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import SmsConfirmPage from './components/SmsConfirmPage'
import history from './history'

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route path="/post/sms"><SmsConfirmPage /></Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/"><HomePage /></Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
