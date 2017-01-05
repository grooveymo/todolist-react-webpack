var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
//var Layout = require('./components/Layout');
//var Home = require('./components/Home');

//ReactDOM.render(
//    <h1>Hello from React!</h1> ,
//    document.getElementById('root')
//);


//ReactDOM.render(
//    <Layout /> ,
//    document.getElementById('root')
//);

//ReactDOM.render(
//    <Home /> ,
//    document.getElementById('root')
//);

ReactDOM.render(
    routes,
    document.getElementById('root')
);
