import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState<string>("Loading...");
  const [users, setUsers] = useState<any[]>([]);
  const [question, setQuestion] = useState<any>(null);

  useEffect(() => {
    Promise.all([
      axios.get("https://python-example-8i2y.onrender.com/users"),
      axios.get("https://python-example-8i2y.onrender.com/question/1"),
    ])
      .then(([usersRes, questionRes]) => {
        setUsers(usersRes.data);
        setQuestion(questionRes.data);
        setMessage("Data loaded successfully ✅");
      })
      .catch((err) => {
        console.error(err);
        setMessage("Failed to load data ❌");
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <h2 style={{ color: "#38bdf8", marginTop: "20px" }}>
        {message}
      </h2>

      {/* Users */}
      <h3>Users</h3>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.name} ({u.email})</li>
        ))}
      </ul>

      {/* Question */}
      <h3>Question</h3>
      {question && <pre>{JSON.stringify(question, null, 2)}</pre>}

      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
