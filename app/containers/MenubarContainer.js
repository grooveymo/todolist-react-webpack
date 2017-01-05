var React = require('react');
var Menubar = require('../components/Menubar');

var MenubarContainer = React.createClass({
    contextTypes : {
        router : React.PropTypes.object.isRequired
    },
    handleClickHome : function(){
        console.log('clicked on home');
        this.context.router.push({
            pathname : '/home'
        });
    },
    handleClickCreateList : function(){
        console.log('clicked on create list');
        this.context.router.push({
            pathname : '/createlist'
        });
    },
    handleClickViewLists : function(){
        console.log('clicked on view lists');
        this.context.router.push({
            pathname : '/viewlists'
        });
    },
    render : function () {
        return (
            <Menubar
                onClickHome={this.handleClickHome}
                onClickCreateList = {this.handleClickCreateList}
                onClickViewLists = {this.handleClickViewLists}/>
        )
    }
});

module.exports = MenubarContainer;
