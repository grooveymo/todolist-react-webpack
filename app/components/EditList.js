var React = require('react');

function EditList (props) {
        return (
            <div className="container">
                <h1 className="alert alert-success">Edit List : <mark> {props.todoList.title}</mark> </h1>

                <form onSubmit={props.onSubmitTodo}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Add Todo"
                            value={props.todo}
                            onChange={props.onUpdateTodo}
                            type="text" />
                    </div>
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button
                            className="btn btn-block btn-success"
                            type="submit">
                            Create
                        </button>
                    </div>
                </form>



            </div>
        )
};

module.exports = EditList;