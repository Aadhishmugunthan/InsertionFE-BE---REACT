import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {

  const [reload, setReload] = useState(false);

  const refreshTasks = () => {
    setReload(!reload);
  };

  return (
    <div className="container">

      <h1>Task Manager</h1>

      <TaskForm refresh={refreshTasks} />

      <TaskList reload={reload} />

    </div>
  );
}

export default App;