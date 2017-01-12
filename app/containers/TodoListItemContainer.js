var React = require('react');
var RestUtils = require('../utils/RestUtils');
var TodoListItem = require('../components/TodoListItem');

var TodoListItemContainer = React.createClass({
    getInitialState : function(){
        return {
            data : this.props.todoList.todos || []
        }
    },
    render : function() {
            var data = this.props.todoList.todos || [];
            var todoItems = data.map(function(todo, i) {
                return (
                    <TodoListItem key={i}
                                  isComplete={todo.isCompleted}
                                  description={todo.description}
                                  toggleIsComplete={this.props.handleToggleComplete.bind(null, this.props.todoList._id, todo)}
                                  onRemove={this.props.handleRemoveTodo.bind(null, this.props.todoList._id, todo)}
                                  listId={this.props.todoList._id}
                                  todoId={todo._id}/>
                    );
                }, this);

            return (
                <div>
                    {todoItems}
                </div>
            );

    } //render

});


module.exports = TodoListItemContainer;
