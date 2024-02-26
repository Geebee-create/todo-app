import React from 'react';
import TodoItem from './TodoItem';

// declaring the function TodoList and takes on 3 props
// Uses the map function to iterate over the tasks array and render a TodoItem component for each task.
// Each TodoItem component is passed the following props:
// key: The key prop is set to the id of the task to ensure unique identification for each rendered item. It helps React efficiently update the list.
// task: The task object containing information about the task.
// onToggleCompletion: The function to toggle the completion status of a task.
// onDeleteTask: The function to delete a task.
function TodoList({ tasks, onToggleCompletion, onDeleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          onToggleCompletion={onToggleCompletion}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;