import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
            <h2>Begin adding tasks!</h2>
            
            <p>{!data ? "Loading..." : data}</p>
        </header>
      </div>
    </>
  );
}

export default App