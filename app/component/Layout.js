/**
 * template for all pages
 */
var React = require('react');
var Header = require('./Header');
var Footer = require('./Footer');

var Layout = React.createClass({
    render : function(){
        return (
            <div>
                <Header/>
                 {this.props.children}
                <Footer/>
            </div>
        )
    }
});

module.exports = Layout;