var React = require('react');
var ViewLists = require('../components/ViewLists');
var RestUtils = require('../utils/RestUtils');

//TODO - look at custom react components - https://github.com/brillout/awesome-react-components
//TODO - look at using existing react table component - https://facebook.github.io/fixed-data-table/
var ViewListsContainer = React.createClass({
    getInitialState : function (){
        return {
            isLoading : true,
            todoLists : [],
            tableHeaders : ['Title', '#Items']
        }
    },
    componentDidMount : function (){
        RestUtils.getAllLists()
            .then(function(response){
                console.log('View All TodoList => ' + JSON.stringify(response.data));
                this.setState({
                    todoLists : response.data,
                    isLoading : false
                });
            }.bind(this));
    },
    render : function(){
        return (
            <ViewLists todoLists={this.state.todoLists} tableHeaders={this.state.tableHeaders}/>
        )
    }
});

module.exports = ViewListsContainer;