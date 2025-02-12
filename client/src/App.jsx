import { useState } from "react";
import { useEffect } from "react";
import TaskListContainer from "./components/TaskListContainer";
import "./App.css";

// TODO: eventually implement the suggestions from G.S

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>Begin adding tasks!</h1>
                    <h2>{!data ? "Loading..." : data}</h2>
                </header>

                <TaskListContainer />
            </div>
        </>
    );
}

export default App;