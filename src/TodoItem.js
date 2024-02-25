import React from 'react';

function TodoItem({ task, onToggleCompletion, onDeleteTask }) {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
      <button onClick={() => onToggleCompletion(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;