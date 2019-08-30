import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <BrowserRouter>
			<Route path='/' exact component={Home}/>
			<Route path='/user' exact component={UserDetails}/>
    </BrowserRouter>
  );
}

export default App;
