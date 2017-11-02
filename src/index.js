import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// Import App has to happen after bootstrap is imported.
import Header from './components/header';

ReactDOM.render(
    <BrowserRouter>
  
        <Header/>
    
</BrowserRouter>,
    document.getElementById('root'));

