import logo from './logo.svg';
import './App.css';

import React, { Fragment } from 'react';
import Home from './feature/view/home/home';
import Navs from 'src\feature\view\navBar\nav_bar';
function App() {
  return (
   <Fragment>
   <Navs/>
    <Home/>
   </Fragment>
  );
}

export default App;
