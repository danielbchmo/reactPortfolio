import React, { useState } from "react";
import '../styles/TaskForm.css';
import { v4 as uuidv4 } from 'uuid'; 

function TaskForm(props) {
  const [input, setInput] = useState('');
 
  const handleChange = e => {
    //console.log('Typing...')
    setInput(e.target.value);
  };

  const handleShipping = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(), //identificador unico con un paquete nuevo
      text: input,
      completed: false
    }
    props.onSubmit(newTask);
  };

  return (
    <form 
      className="task-form"
      onSubmit={handleShipping}
    >
      <input 
        className="task-input"
        type="text"
        placeholder="Type a task"
        name="text"
        onChange={handleChange}
        />
        <button className="task-button">
          Add task
        </button>
    </form>
  );
}

export default TaskForm;