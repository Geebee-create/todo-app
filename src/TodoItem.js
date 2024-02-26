import React from 'react';

// the code below declares a functional component named TodoItem that takes three props: task, 
// onToggleCompletion, and onDeleteTask.
// a list item is rendered (<li>) containing the task information.
// the task text is displayed within a <span>. The style attribute is used to apply a text decoration of 
// 'line-through' if the task is completed (task.completed is true), and 'none' if it's not completed.
// two buttons are rendered:
// the first button toggles the completion status of the task. The button text is dynamically set based on whether
//  the task is completed or not ('Undo' if completed, 'Complete' otherwise).
// and the second button triggers the deletion of the task.
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