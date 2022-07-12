import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TypesOfFruit from './components/TypesOfFruit';


const JSX=(
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to DOM</p>
    <TypesOfFruit/>
  </div>

) 
ReactDOM.render( JSX ,document.getElementById('root'));



