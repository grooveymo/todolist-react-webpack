var React = require('react');

//<div className="container">
//    <div className="well col-sm-12 text-left">
//        <h3>View Lists Page</h3>
//        <p>
//            This page will allow you to view Lists
//        </p>
//
//    </div>
//</div>

var ViewLists = React.createClass({
    render : function(){
        return (
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        {this.props.tableHeaders.map(function(title) {
                            return <th key={title}>{title}</th>;
                        })}
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.todoLists.map(function(row, i) {
                        return (
                            <tr key={i}>
                                <td>{row.title}</td>
                                <td>{row.todos.length}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
});

module.exports = ViewLists;