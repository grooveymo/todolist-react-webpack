var React = require('react');
var CreateList = require('../components/CreateList');
var RestUtils = require('../utils/RestUtils');

var CreateListContainer = React.createClass({
    getInitialState : function(){
        return {
            title : ''
        }
    },
    handleSubmitListTitle: function (e) {
        console.log('submit event : ' + e.target.listTitle.value);
        RestUtils.createTodoList(e.target.listTitle.value)
            .then(
            function(response){
                console.log('Create TodoList => ' + JSON.stringify(response.data.todoList));
            }.bind(this)
        );

    },
    render: function () {
        return (
            <CreateList onSubmitListTitle={this.handleSubmitListTitle}/>
        )
    }
});

module.exports = CreateListContainer;