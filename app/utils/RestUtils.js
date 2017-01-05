var axios = require('axios');

var host = "http://localhost";
var port = "9090";
var uri = host + ":" + port;

function createTodoList(title) {
    return axios.post(uri + '/api/todolists',{title : title});
}

function getAllLists() {
    return axios.get(uri + '/api/todolists');
}


var RestUtils = {

    createTodoList: createTodoList,
    getTodoList: function (todoListId) {
    },
    deleteTodoList: function (todoListId) {
    },
    addTodo: function (todo) {
    },
    removeTodo: function (todoListId, todoId) {
    },
    completeTodo: function (todoId) {
    },
    getAllLists: getAllLists
};


module.exports = RestUtils;