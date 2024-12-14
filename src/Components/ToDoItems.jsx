import React, { useState } from "react";

const ToDoItems = ({ task, deleteTask, editTask, toggleCompletion }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTask, setNewTask] = useState(task.text);

  function handleEdit() {
    editTask(task.id, newTask);
    setIsEdit(false);
  }
  return (
    <li className="py-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompletion(task.id)}
          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        />
        {isEdit ? (
          <div className="flex items-center py-2 ml-8">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
              onClick={handleEdit}
            >
              Save
            </button>
          </div>
        ) : (
          <span
            className="text-lg font-sans ml-8"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
          >
            {task.text}
          </span>
        )}
      </div>
      <div className="flex pr-3">
        {!isEdit && (
          <button
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
        <button
          className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItems;
