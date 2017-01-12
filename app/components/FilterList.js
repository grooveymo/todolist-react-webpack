var React = require('react');

function FilterList(props) {
    return (
        <div className="container well">
            <form className="form-inline">
                <div className="col-sm-4">
                    <h4>
                        <span className="label label-default">{props.numActive}</span> left
                    </h4>
                </div>
                <div className="col-sm-2">
                    <button type="button" className="btn btn-block btn-warning" onClick={props.showAll}> All</button>
                </div>
                <div className="col-sm-2">
                    <button type="button" className="btn btn-block btn-info" onClick={props.showActive}> Active</button>
                </div>
                <div className="col-sm-2">
                    <button type="button" className="btn btn-block btn-success" onClick={props.showCompleted}>
                        Completed
                    </button>
                </div>

            </form>
        </div>
    )
}

module.exports = FilterList;
