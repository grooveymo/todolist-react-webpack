var React = require('react');
var Layout = require('./Layout');

var ViewLists = React.createClass({
    render : function(){
        return (
            <div className="container">
                    <div className="well col-sm-12 text-left">
                        <h3>View Lists Page</h3>
                        <p>
                            This page will allow you to view Lists
                        </p>

                    </div>
            </div>

        )
    }
});

module.exports = ViewLists;