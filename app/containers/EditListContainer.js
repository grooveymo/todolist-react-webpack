var React = require('react');
var EditList = require('../components/EditList');
var RestUtils = require('../utils/RestUtils');

var EditListContainer = React.createClass({
    getInitialState : function (){
        return {
            isLoading : true,
            todoList : {}
        }
    },
    componentDidMount : function (){
        console.log('1. Edit TodoList => ' + JSON.stringify(this.props.routeParams));

        var id = this.props.routeParams.todoListId;

        RestUtils.getTodoList(id)
            .then(function(response){
                console.log('2. Edit TodoList => ' + JSON.stringify(response.data));
                this.setState({
                    todoList : response.data,
                    isLoading : false
                });
            }.bind(this));
    },
    render : function(){
        return (
            <EditList todoList={this.state.todoList} />
        )
    }
});

module.exports = EditListContainer;