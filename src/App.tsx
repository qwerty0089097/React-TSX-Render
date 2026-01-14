import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    axios
      .get("https://python-example-8i2y.onrender.com/")
      .then((res) => {
        setMessage(res.data.message);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        setMessage("Failed to load message from backend");
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

      {/* 🔽 Message from FastAPI */}
      <h2 style={{ color: "#38bdf8", marginTop: "20px" }}>
        {message}
      </h2>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
