import { useState } from "react";
import { createTask } from "../service/api";

function TaskForm({ refresh }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        const task = {

            title,
            description
        };

        await createTask(task);

        setTitle("");
        setDescription("");

        refresh();
    };

    return (

        <form onSubmit={handleSubmit}>

            <h2>Add Task</h2>

            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br />

            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <br />

            <button type="submit">
                Add Task
            </button>

        </form>
    );
}

export default TaskForm;