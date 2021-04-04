import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter, Redirect, useLocation } from 'react-router-dom';
import { Main } from './components/Main';
import { Time } from './components/Time';
import { Question } from './components/Question';
import { Display } from './components/Display';

function App() {
  return (
    <div className='app-container'> 
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/Time" component={Time} />
          <Route path="/Question" component={Question} />
          <Route path="/Display" component={Display} />
        </Switch>
      </BrowserRouter>              
    </div>
  )
}
export default App;
