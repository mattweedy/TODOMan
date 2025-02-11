export default function TaskCreateTextBox({ todoText, setTodoText, addTodo }) {
    function handleSubmit(e) {
        e.preventDefault();
        if (!todoText.trim()) return;
        addTodo(todoText.trim())
        setTodoText("")
        console.log("Added task : ", todoText)
    }

    const todoTextChangeHandler = (e) => {
        setTodoText(e.target.value);
    };

    return (
        <form method="post" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todoTextBox"
                placeholder="'Buy eggs...' or 'Get a life'"
                value={todoText}
                onChange={todoTextChangeHandler}
            />
            <button>Create Task</button>
        </form>
    );
}
