var React = require('react');
var Layout = require('./Layout');
var PropTypes = React.PropTypes;

function CreateList(props) {
        return (
            <div className="container">
                    <div className="well col-sm-12 text-left">
                        <h3>Create List Page</h3>
                        <p>
                            This page will allow you to create Lists
                        </p>

                        <form onSubmit={props.onSubmitListTitle}>
                            <div className='form-group'>
                                <label htmlFor='listTitle'>Enter List Title</label>
                                <input className='form-control' id='listTitle'/>
                            </div>
                            <div className="form-group col-sm-4 col-sm-offset-4">
                                <button
                                    className="btn btn-block btn-success"
                                    type="submit">
                                    Continue
                                </button>
                            </div>
                        </form>

                    </div>
            </div>
        )
};

CreateList.propTypes = {
    onSubmitListTitle :PropTypes.func.isRequired
}

module.exports = CreateList;