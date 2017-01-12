var React = require('react');
var EditList = require('../components/EditList');
var RestUtils = require('../utils/RestUtils');

/**
 * Calculates Number of todos that are active
 * @param todos
 * @returns {string}
 */
function calculateNumActive(todos){
    var activeTodos = [];
    var numActive = '';

    if(todos) {
        activeTodos = todos.filter(function (todo) {
            return todo.isCompleted;
        });
        numActive = todos.length - activeTodos.length;
    }
    return numActive;
}

var EditListContainer = React.createClass({
    getInitialState : function (){
        return {
            isLoading : true,
            todoList : {},
            currentTodo : ''
        }
    },
    componentWillMount : function (){
        console.log('***** 1. Edit TodoList => ' + JSON.stringify(this.props.routeParams));

        var id = this.props.routeParams.todoListId;

        RestUtils.getTodoList(id)
            .then(function(response){
                console.log('2. Edit TodoList => ' + JSON.stringify(response.data));
                var numActive = calculateNumActive(response.data.todos);

                this.setState({
                    todoList : response.data,
                    isLoading : false,
                    numActive : numActive
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
                var numActive = calculateNumActive(response.data.todos);

                this.setState({
                    todoList : response.data,
                    isLoading : false,
                    currentTodo : '',
                    numActive : numActive
                });
            }.bind(this));

    },
    handleRemoveTodo : function(listId, todo){
        console.log('clicked remove button');
        RestUtils.removeTodo(listId, todo._id)
            .then(function(response){
                console.log('2. Delete todo --> TodoList => ' + JSON.stringify(response.data));
                var numActive = calculateNumActive(response.data.todos);

                this.setState({
                    todoList : response.data,
                    isLoading : false,
                    numActive : numActive

                });
            }.bind(this));
    },
    handleToggleComplete : function(listId, todo){
        console.log('clicked complete button');
        RestUtils.completeTodo(listId, todo._id)
            .then(function(response){
                console.log('Toggled complete field for todo --> TodoList => ' + JSON.stringify(response.data));
                var numActive = calculateNumActive(response.data.todos);

                this.setState({
                    todoList : response.data,
                    isLoading : false,
                    numActive : numActive
                });
            }.bind(this));

    },
    handleShowAll : function(){
        var id = this.state.todoList._id;
        RestUtils.getTodoList(id)
            .then(function(response){
                console.log('clicked on show All => ' + JSON.stringify(response.data));
                var numActive = calculateNumActive(response.data.todos);

                this.setState({
                    todoList : response.data,
                    isLoading : false,
                    numActive : numActive
                });
            }.bind(this));

    },
    handleShowActive : function(){
        var id = this.state.todoList._id;
        RestUtils.getTodoList(id)
            .then(function(response){
                console.log('Clicked on show Active => ' + JSON.stringify(response.data));

                var numActive = calculateNumActive(response.data.todos);

                var activeTodos = response.data.todos.filter(function(todo){
                    return !todo.isCompleted;
                });

                var todoList = response.data;
                todoList.todos = activeTodos;

                this.setState({
                    todoList : todoList,
                    isLoading : false,
                    numActive : numActive
                });
            }.bind(this));

    },
    handleShowCompleted : function(){
        console.log('Clicked on show completed');
        var id = this.state.todoList._id;
        RestUtils.getTodoList(id)
            .then(function(response){
                console.log('Clicked on show Active => ' + JSON.stringify(response.data));
                var numActive = calculateNumActive(response.data.todos);

                var completedTodos = response.data.todos.filter(function(todo){
                    return todo.isCompleted;
                });

                var todoList = response.data;
                todoList.todos = completedTodos;

                this.setState({
                    todoList : todoList,
                    isLoading : false,
                    numActive : numActive
                });
            }.bind(this));

    },
    render : function(){
        return (
            <EditList todoList={this.state.todoList}
                      onUpdateTodo={this.handleUpdateTodo}
                      onSubmitTodo={this.handleSubmitTodo}
                      isLoading={this.state.isLoading}
                      onRemoveTodo={this.handleRemoveTodo}
                      onToggleComplete={this.handleToggleComplete}
                      numActive={this.state.numActive}
                      onShowAll={this.handleShowAll}
                      onShowActive={this.handleShowActive}
                      onShowCompleted={this.handleShowCompleted}
                />
        )
    }
});

module.exports = EditListContainer;