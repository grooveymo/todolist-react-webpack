/**
 * Displays info in main panel when user lands on page
 */
var React = require('react');
var Layout = require('./Layout');

var Main = React.createClass({
    render : function() {
        return (
            <div className="container">
                <Layout>
                    <div className="jumbotron">
                        <h1>Create and Manage your Todo List</h1>
                    </div>
                </Layout>
            </div>
        )
    }
});


module.exports = Main;