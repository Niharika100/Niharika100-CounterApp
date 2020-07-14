import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App.js';

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);

// PRINT DATA ON THE WEBPAGE
// ReactDOM.render(React.createElement('h1',null,'Hello'),document.getElementById('root'));

// // INITIATIVE TO REDUCE THE LENGTH OF THE CODE
// const element = React.createElement('h1',null,'Hey This code is gonna be of shorter length')
// const rootElement = document.getElementById('root');
// ReactDOM.render(element,rootElement);

// //INSERT ANOTHER H2 STATEMENT IN THE WEBPAGE
// const h2Element = React.createElement('h2',null,'this the h2 file');
// const element = React.createElement('h1',{className : 'title'},'This is h1 statement', h2Element);
// const rootElement = document.getElementById('root');

// ReactDOM.render(element,rootElement);

// readable method
// const rootElement = document.getElementById('root');
// ReactDOM.render(<h1 className = "title">Hello <h2>How are you</h2></h1>,rootElement);

// debugger  // it is used to debug the file

// ANOTHER METHOD
// const rootElement = document.getElementById('root');
// const h2Element = React.createElement('h2',null,'this the h2 file');
// ReactDOM.render(h2Element,rootElement);


// //APPEND CHLD
// var ele = document.createElement('h1');
// var content = document.createTextNode('This is Appended data');
// ele.appendChild(content);
// rootElement.appendChild(ele);




//ReactDOM.render(<App className = "title"/>,rootElement);
//ReactDOM.render(React.createElement(app,{className : 'title'},null),rootElement);


//NOTE: function name should start with a capital letter





//PRACTICE ON CONSOLE (APPEND)
// var element = document.createElement('DIV')
// var content = document.createTextNode('Hey you!')
// element.append(content)
// <div>​Hey you!​</div>​
// document.getElementById('root').append(element)