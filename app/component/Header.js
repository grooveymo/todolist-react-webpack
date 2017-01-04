/**
 * Header compt for all pages
 */
var React = require('react');
var Menubar = require('./Menubar');

var Header = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Reactodo</h1>
                </div>
            <Menubar/>
            </div>
        )
    }
});

module.exports = Header;