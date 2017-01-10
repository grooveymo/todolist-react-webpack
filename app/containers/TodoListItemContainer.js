var React = require('react');
var TodoListItem = require('../components/TodoListItem');

var TodoListItemContainer = React.createClass({
    getInitialState : function(){
        return {
            data : this.props.todoList.todos || []
        }
    },
    handleToggleIsComplete : function(){
        console.log('clicked complete button');
    },
    handleRemove : function(){
        console.log('clicked remove button');
    },
    render : function() {
            var data = this.props.todoList.todos || [];
            var todoItems = data.map(function(todo, i) {
                return (
                    <TodoListItem key={i}
                                  isComplete={todo.isComplete}
                                  description={todo.description}
                                  toggleIsComplete={this.handleToggleIsComplete}
                                  onRemove={this.handleRemove}/>
                    );
                }, this);

            return (
                <div>
                    {todoItems}
                </div>
            );

    } //render

});


/*
 {this.state.data.map(function(todo, i) {
 return (
 <TodoListItem key={i}
 isComplete={todo.isComplete}
 description={todo.description}
 toggleIsComplete={this.handleToggleIsComplete}
 onRemove={this.handleRemove}/>
 );
 })
 }
*/
module.exports = TodoListItemContainer;
