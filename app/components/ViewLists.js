var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

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
                        console.log('Foo  - > ' + row);
                        var path = '/editlist/' + row._id;
                        return (
                            <tr key={i}>
                                <td>{row.title}</td>
                                <td>{row.todos.length}</td>
                                <td>
                                    <Link to={path}>
                                        <button type='button' className='btn btn-lg btn-danger'>Edit</button>
                                    </Link>
                                </td>
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