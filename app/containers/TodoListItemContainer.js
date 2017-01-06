var React = require('react');
var TodoListItem = require('../components/TodoListItem');

var TodoListItemContainer = React.createClass({
    handleToggleIsComplete : function(){},
    handleRemove : function(){},
    render : function(){
        return (
            <TodoListItem
                isComplete=''
                description=''
                toggleIsComplete={this.handleToggleIsComplete}
                onRemove={this.handleRemove}/>
        )
    }
});

module.exports = TodoListItemContainer;