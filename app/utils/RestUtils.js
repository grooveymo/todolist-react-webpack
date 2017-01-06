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

function getTodoList(todoListId) {
    return axios.get(uri + '/api/todolists/'+todoListId);
}

function addTodo(todoListId, description){
    return axios.put(uri + '/api/todolists/' + todoListId + '/add', {description : description});
}


var RestUtils = {

    createTodoList: createTodoList,
    getTodoList: getTodoList,
    deleteTodoList: function (todoListId) {
    },
    addTodo: addTodo,
    removeTodo: function (todoListId, todoId) {
    },
    completeTodo: function (todoId) {
    },
    getAllLists: getAllLists
};


module.exports = RestUtils;