import React from 'react';
import TodoItem from './TodoItem';

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