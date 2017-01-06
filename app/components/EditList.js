var React = require('react');

var EditList = React.createClass({
    render : function(){
        return (
            <div className="container">
                <h1>Edit List : <mark> {this.props.todoList.title}</mark>></h1>
            </div>
        )
    }
});

module.exports = EditList;