import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from './components/main/main';
import About from './components/about/about';
import Contacts from './components/contacts/contacts';
import Tests_list from './components/tests_list/tests_list';

/*
            <Route exact path='/about' component = {About}/>
            <Route exact path='/contacts' component = {Contacts}/>
            <Route exact path='/tests' component = {Tests_list}/>
 */

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component = {MainPage}/>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
