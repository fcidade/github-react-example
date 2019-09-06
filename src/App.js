import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';

/**
 * Represents the application container.
 * @returns {object} Returns all the JSX for the entire application.
 */
function App() {
  return (
    <BrowserRouter>
			<Route path='/' exact component={Home}/>
			<Route path='/user' exact component={UserDetails}/>
    </BrowserRouter>
  );
}

export default App;
