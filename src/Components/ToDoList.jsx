import React from "react";
import ToDoItems from "./ToDoItems";

const ToDoList = ({ tasks, deleteTask, editTask, toggleCompletion }) => {
  return (
    <div>
      <ul className="divide-y divide-gray-200 px-4">
        {tasks.map((task) => (
          <ToDoItems
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
