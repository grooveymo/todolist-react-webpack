/**
 * Displays info in main panel when user lands on page
 */
var React = require('react');
var Layout = require('./Layout');

var Home = React.createClass({
    render : function() {
        return (
            <div className="container">
                    <div className="well col-sm-12 text-left">
                        <h3>Home Page</h3>
                        <p>
                            Welcome to REACTODO, a Todo List built using React and webpack
                        </p>

                    </div>
            </div>
        )
    }
});


module.exports = Home;