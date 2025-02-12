import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskCreateTextBox from "./TaskCreateTextBox";

// TODO: talk with mongoDB and add/remove items
// TODO: have the state saved by remembering/filling out from DB

export default function TaskListContainer() {
    // state for current todo
    const [todo, setTodo] = useState({
        id: "",
        text: "",
        type: "default",
        priority: "medium",
    });
    // state for the list of todos
    const [todoList, setTodoList] = useState([]);

    // add new todo to the list
    const addTodo = (newTodo) => {
        const todoWithId = {
            ...newTodo,
            id: uuidv4(), // generate uuid for new todo
        };
        setTodoList([...todoList, todoWithId]);
        console.log(`Added new todo:
            id   : ${todoWithId.id}
            text : ${todoWithId.text}
            type : ${todoWithId.type}
            priority : ${todoWithId.priority}`);
    };

    // remove a todo by its ID
    const removeTodo = (todoId) => {
        setTodoList(todoList.filter((todo) => todo.id !== todoId));
    };

    // clear the entire list
    const clearList = () => {
        setTodoList([]);
    };

    // render list of todos
    const listItems = todoList.map((todo) => (
        <li key={todo.id}>
            {/* {todo.id} | {todo.text} | {todo.type} | {todo.priority} */}
            {todo.text} | {todo.type} | {todo.priority}
            <button onClick={() => removeTodo(todo.id)}>x</button>
        </li>
    ));

    const tableItems = todoList.map((todo) => (
        <tr key={todo.id}>
            <td>{todo.text}</td>
            <td>{todo.type}</td>
            <td>{todo.priority}</td>
            <td><button onClick={() => removeTodo(todo.id)}>x</button></td>
        </tr>
    ));

    return (
        <div>
            <TaskCreateTextBox
                todo={todo}
                setTodo={setTodo}
                addTodo={addTodo}
            />
            {/* <ul>{listItems}</ul> */}
            <table>
                <tr>
                    <th>Todo</th>
                    <th>Category</th>
                    <th>Priority</th>
                    <th>Remove</th>
                </tr>
                {tableItems}
            </table>
            <button onClick={clearList}>
                Clear All
            </button>
        </div>
    );
}
