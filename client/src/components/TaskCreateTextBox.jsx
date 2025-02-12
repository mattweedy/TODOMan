export default function TaskCreateTextBox({ todo, setTodo, addTodo }) {
    function handleSubmit(e) {
        e.preventDefault();
        if (!todo.text.trim()) return;
        addTodo(todo);
        setTodo({ ...todo, text: "" })
        console.log("Added task : ", todo)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTodo({
            ...todo,
            [name]: value,
        });
    };

    return (
        <form method="post" onSubmit={handleSubmit}>
            <input
                type="text"
                name="text"
                className="todoTextBox"
                placeholder="'Buy eggs...' or 'Get a life'"
                value={todo.text}
                onChange={handleInputChange}
            />
            <select
                name="type"
                value={todo.type}
                onChange={handleInputChange}
            >
                <option value="default">Default</option>
                <option value="urgent">Urgent</option>
                <option value="optional">Optional</option>
            </select>
            <select
                name="importance"
                value={todo.importance}
                onChange={handleInputChange}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button>Create Task</button>
        </form>
    );
}
