import React from 'react';
import './StylesStoryDetails.scss';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return <p className="no-tasks-message">No hay tareas agregadas</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id} className="task-item">
          <div className="task-content">
              <span className={`task-name ${task.done ? 'task-done' : ''}`}>{task.name}</span>
            <div className="task-actions">
              <button onClick={() => onEdit(task)} className="edit-button">✎</button>
              <button onClick={() => onDelete(task._id)} className="delete-button">-</button>
            </div>
          </div>
          <p className="epic-description"> {task.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
