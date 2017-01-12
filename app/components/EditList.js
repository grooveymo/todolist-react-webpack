var React = require('react');
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
                <mark> {props.todoList.title}</mark>
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

module.exports = EditList;
