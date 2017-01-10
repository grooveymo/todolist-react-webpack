var React = require('react');
var TodoListItemContainer = require('../containers/TodoListItemContainer');

function renderChildren(props){
    return (React.cloneElement(props.children, { todoList : props.todoList }));

}

var TodoListItemContainerWrapper = React.createClass({
    render : function() {
        return (
            <div>
                {renderChildren(this.props)}
            </div>
        )
    }
});

module.exports = TodoListItemContainerWrapper;

//                {React.cloneElement(this.props.children, { todoList : props.todoList })}
//            <div>{this.props.children}</div>
