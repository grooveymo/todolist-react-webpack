/**
 * Header compt for all pages
 */
var React = require('react');
var MenubarContainer = require('../containers/MenubarContainer');

var Header = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="jumbotron col-sm-12 text-center">
                    <h1>Reactodo</h1>
                </div>
            <MenubarContainer/>
            </div>
        )
    }
});

module.exports = Header;