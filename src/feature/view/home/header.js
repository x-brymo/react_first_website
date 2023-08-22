import React from 'react';
import { Container } from 'react-bootstrap';

//import * as images from '/../'
const Header=()=>{
  return (
    <header>
    <div className='container'>
        <div className='cl-md-6'>
          <h2>Titlr WebSite</h2>
          <p> 3 lines</p>
        </div>
        <div className='cl-md-6'>
          <img src='./../../first_ui_assets/phone-uii.svg' alt='phoneUI'/>
        </div>
        </div>
    </header>
  );
}
export default Header;