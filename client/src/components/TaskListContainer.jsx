import { useState } from "react";
import TaskCreateTextBox from "./TaskCreateTextBox";

export default function TaskListContainer() {
    const [todoText, setTodoText] = useState("")
    const [todoList, setTodoList] = useState([]);

    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    };

    function clearList() {
        setTodoList([]);
    }

    const listItems = todoList.map(todo =>
        <li>{todo}</li>
    );

    return (
        <div>
            <TaskCreateTextBox todoText={todoText} setTodoText={setTodoText} addTodo={addTodo}/>
            <ul>{listItems}</ul>
            <button onClick={clearList}>Clear All</button>
        </div>
    )
}