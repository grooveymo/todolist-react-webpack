var React = require('react');
var ViewLists = require('../components/ViewLists');
var RestUtils = require('../utils/RestUtils');

//TODO - look at custom react components - https://github.com/brillout/awesome-react-components
//TODO - look at using existing react table component - https://facebook.github.io/fixed-data-table/
var ViewListsContainer = React.createClass({
    getInitialState : function (){
        RestUtils.getAllLists()
            .then(function(response){
                console.log('View All TodoList => ' + JSON.stringify(response.data));
                return response.data;
            });

        return null;
    },
    render : function(){
        return (
            <ViewLists />
        )
    }
});

module.exports = ViewListsContainer;