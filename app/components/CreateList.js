var React = require('react');
var Layout = require('./Layout');

var CreateList = React.createClass({
    render : function(){
        return (
            <div className="container">
                    <div className="well col-sm-12 text-left">
                        <h3>Create List Page</h3>
                        <p>
                            This page will allow you to create Lists
                        </p>

                    </div>
            </div>
        )
    }
});

module.exports = CreateList;