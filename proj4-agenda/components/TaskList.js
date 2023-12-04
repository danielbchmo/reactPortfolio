import React, { useState } from "react";
import TaskForm from "./TaskForm";
import '../styles/TaskList.css';
import Task from './Task.js'

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const tasksUpdating = [task, ...tasks];
      setTasks(tasksUpdating);
    }
  }

  const deleteTask = id => {
    const uploadedTasks = tasks.filter(task => task.id !== id);
    setTasks(uploadedTasks);
  }

  const completedTask = id => {
    const uploadedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(uploadedTasks);
  }

    return (
      <>
        <TaskForm onSubmit={addTask} />
        <div className="task-list-container">
          {
            tasks.map((task) =>
              <Task
                key={task.id} //Identifica valores unicos
                id={task.id}
                text={task.text}
                completed={task.completed}
                completedTask={completedTask}
                deleteTask={deleteTask} />
            )
          }
        </div>
      </>
    );
  }

  export default TaskList;