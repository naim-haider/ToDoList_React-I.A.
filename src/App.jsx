import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  // console.log(task);

  // --Load tasks from local storage when the app loads--
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // --save tasks to localstorge whenever teh tasks state changes--
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // --add task functionality--
  function addTask() {
    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    }

    setTask("");
  }
  // console.log(tasks);

  // --delete task by filtering the tasks with id--
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // --edit the task with the id and newedited task--
  function editTask(id, newTask) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newTask } : task))
    );
  }

  // --togglling the checkbox of task completion--
  function toggleCompletion(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-x-auto mt-16">
      <Header />

      <form className="w-full max-w-sm mx-auto px-4 py-2">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-4 rounded"
            type="button"
            onClick={addTask}
          >
            Add
          </button>
        </div>
      </form>
      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleCompletion={toggleCompletion}
      />
    </div>
  );
}

export default App;
