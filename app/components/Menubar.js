/**
 * Holds menu buttons
 */
var React = require('react');

function MenuBar(props) {
    return (
        <div className="container">
            <div className="btn-group">
                <button type="button" className="btn btn-primary" onClick={props.onClickHome}>Home</button>
                <button type="button" className="btn btn-primary" onClick={props.onClickCreateList}>Create List</button>
                <button type="button" className="btn btn-primary" onClick={props.onClickViewLists}>View Lists</button>
            </div>
        </div>
    )
};


module.exports = MenuBar;