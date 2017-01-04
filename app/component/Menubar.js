/**
 * Holds menu buttons
 */
var React = require('react');

var MenuBar = React.createClass({
    render : function() {
        return (
            <div className="container">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary">Home</button>
                    <button type="button" className="btn btn-primary">Create List</button>
                    <button type="button" className="btn btn-primary">View/Edit List</button>
                </div>
            </div>
        )
    }
});


module.exports = MenuBar;