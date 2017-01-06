var React = require('react');
var EditList = require('../components/EditList');
var RestUtils = require('../utils/RestUtils');

var EditListContainer = React.createClass({
    getInitialState : function (){
        return {
            isLoading : true,
            todoList : {},
            currentTodo : ''
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
    handleUpdateTodo : function(e) {
        this.setState({
            currentTodo : e.target.value
        })
    },
    handleSubmitTodo : function(e){
        e.preventDefault();
        var id = this.state.todoList._id;

        console.log('added to list with id ' + id);
        console.log('added to list with id ' + this.state.currentTodo );

        this.state.isLoading = true;
        RestUtils.addTodo(id, this.state.currentTodo)
            .then(function(response){
                console.log('3. Added Todo to TodoList => ' + JSON.stringify(response.data));
                this.setState({
                    todoList : response.data,
                    isLoading : false,
                    currentTodo : ''
                });
            }.bind(this));

    },
    render : function(){
        return (
            <EditList todoList={this.state.todoList}
                      onUpdateTodo={this.handleUpdateTodo}
                      onSubmitTodo={this.handleSubmitTodo} />
        )
    }
});

module.exports = EditListContainer;