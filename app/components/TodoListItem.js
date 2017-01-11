/**
 * <TodoListItem isComplete='' toggleIsComplete='' description='' onRemove='' />
 * Needs to be supplied handlers for
 *  - User toggling 'complete' status for a given Todo
 *      > props.toggleIsComplete
 *      > props.isComplete
 *  - User deleting a given Todo from the List
 *      > props.onRemove
 * @type {*|exports|module.exports}
 */
var React = require('react');

function TodoListItem(props) {
    return (
        <div className="container">

            <div className="col-sm-4">
                <div className="checkbox">
                    <label>
                        <input type="checkbox"
                               value={props.isComplete}
                               onChange={props.toggleIsComplete} />
                    </label>
                </div>
            </div>

            <div className="col-sm-4">
                    <label>{props.description}</label>
            </div>

            <div className="col-sm-4">
                    <button
                        className="btn btn-block btn-danger"
                        type="submit"
                        onClick={props.onRemove}>
                        Remove
                    </button>
             </div>
        </div>
    )
};

module.exports = TodoListItem;