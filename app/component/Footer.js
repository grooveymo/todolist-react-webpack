/**
 * template file for footer to appear on all pages
 */
var React = require('react');

var Footer = React.createClass({
    render : function () {
        return (
            <div className="alert alert-success">
                <p>Copyright 2017 masayed</p>
            </div>
        )
    }
});

module.exports = Footer;