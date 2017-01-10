var React = require('react');
var TodoListItem = require('../components/TodoListItem');

var TodoListItemContainer = React.createClass({
    getInitialState : function(){
        return {
            data : []
        }
    },
    handleToggleIsComplete : function(){},
    handleRemove : function(){},
    render : function() {

            {this.props.todoList.todos.map(function(todo, i) {
                return (
                    <TodoListItem key={i}
                                  isComplete={todo.isComplete}
                                  description={todo.description}
                                  toggleIsComplete={this.handleToggleIsComplete}
                                  onRemove={this.handleRemove}/>
                    );
                })
            }

    } //render

});



module.exports = TodoListItemContainer;
