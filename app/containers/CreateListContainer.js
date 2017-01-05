var React = require('react');
var CreateList = require('../components/CreateList');

var CreateListContainer = React.createClass({
    render : function(){
        return (
            <CreateList />
        )
    }
});

module.exports = CreateListContainer;