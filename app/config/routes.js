/**
 * Defines mapping between app url's and components
 * @type {*|exports|module.exports}
 */

//Declare React's routing components
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route  = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

//declare UI components
var HomeContainer = require('../containers/HomeContainer');
var CreateListContainer = require('../containers/CreateListContainer');
var ViewListsContainer = require('../containers/ViewListsContainer');
var EditListContainer = require('../containers/EditListContainer');
var Layout = require('../components/Layout');

//bind routes to components
var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={HomeContainer} />
            <Route path='home'       component={HomeContainer} />
            <Route path='createlist' component={CreateListContainer} />
            <Route path='viewlists'  component={ViewListsContainer} />
            <Route path='editlist/:todoListId'  component={EditListContainer} />
        </Route>
    </Router>
);

module.exports = routes;