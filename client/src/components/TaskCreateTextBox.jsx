export default function TaskCreateTextBox({ todo, setTodo, addTodo }) {
    function handleSubmit(e) {
        e.preventDefault();
        if (!todo.text.trim()) return;
        addTodo(todo);
        setTodo({ ...todo, text: "" });
        console.log("Added task : ", todo);
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
                placeholder="Buy eggs..."
                value={todo.text}
                onChange={handleInputChange}
            />
            <div>
                <div>
                    <label for="type">Category</label>
                    <select
                        id="type"
                        name="type"
                        className="todoSelection"
                        value={todo.type}
                        onChange={handleInputChange}
                        >
                        <option value="default">Default</option>
                        <option value="work">Work</option>
                        <option value="other">Other</option>
                    </select>
                    <label for="priority">Priority</label>
                    <select
                        id="priority"
                        name="priority"
                        className="todoSelection"
                        value={todo.priority}
                        onChange={handleInputChange}
                    >
                        <option value="low">Low Priority</option>
                        <option value="important">Important</option>
                        <option value="urgent">Urgent</option>
                    </select>
                    <button>Create Task</button>
                </div>
            </div>
        </form>
    );
}
