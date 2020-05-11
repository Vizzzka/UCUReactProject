import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from './components/main/main';
import About from './components/about/about';
import Contacts from './components/contacts/contacts';
import TestsQuestions from './components/tests-questions/tests-questions';


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component = {MainPage}/>
            <Route exact path='/about' component = {About}/>
            <Route exact path='/contacts' component = {Contacts}/>

            <Route path='/test/:id/' component={TestsQuestions}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
