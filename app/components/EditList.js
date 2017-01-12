var React = require('react');
var PropTypes = React.PropTypes;

var TodoListItemContainer = require('../containers/TodoListItemContainer');
var FilterList = require('../components/FilterList');
var styles = require('../styles');

function EditList(props) {
    var child = React.cloneElement(<TodoListItemContainer />, {
        todoList: props.todoList, isLoading: props.isLoading,
        handleRemoveTodo: props.onRemoveTodo, handleToggleComplete: props.onToggleComplete
    });


    return (
        <div className="container">
            <h1 className="alert alert-success">Edit List :
                <span className="label label-default"> {props.todoList.title}</span>
            </h1>

            <form onSubmit={props.onSubmitTodo} className="form-inline">
                <div className="form-group">
                    <div className="col-sm-8">
                        <input
                            className="form-control"
                            placeholder="Add Todo"
                            value={props.todo}
                            onChange={props.onUpdateTodo}
                            type="text"/>
                    </div>
                    <div className="col-sm-4">
                        <button
                            className="btn btn-block btn-success"
                            type="submit">
                            Create
                        </button>
                    </div>
                </div>
            </form>

            <div style={styles.space}>
                {child}
            </div>

            <div style={styles.space}>
                <FilterList numActive={props.numActive} showAll={props.onShowAll} showActive={props.onShowActive}
                            showCompleted={props.onShowCompleted}/>
            </div>
        </div>
    )
};

EditList.propTypes = {
    todoList :PropTypes.object,
    isLoading : PropTypes.bool.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
    onToggleComplete : PropTypes.func.isRequired,
    onSubmitTodo : PropTypes.func.isRequired,
    todo : PropTypes.object,
    onUpdateTodo : PropTypes.func.isRequired,
    numActive : PropTypes.number,
    onShowAll : PropTypes.func.isRequired,
    onShowActive : PropTypes.func.isRequired,
    onShowCompleted : PropTypes.func.isRequired
};

module.exports = EditList;
