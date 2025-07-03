import { useUpdateTodoMutation, useDeleteTodoMutation } from '../api/apiSlice';
import { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const TodoItem = ({ todo }) => {

  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleCheck = useCallback((todo) => {
    updateTodo({ ...todo, completed: !todo.completed });
  }, [updateTodo]);

  const handleDelete = useCallback((id) => {
    deleteTodo({ id });
  }, [deleteTodo]);

  return (
    <article key={todo.id} className="todo-item">
      <div className="todo">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleCheck(todo)}
          onKeyDown={(e) => e.key === 'Enter' && handleCheck(todo)}
        />
        <p className={todo.completed ? 'completed' : ''}>
          {todo.title}
        </p>
      </div>
      <button onClick={() => handleDelete(todo.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </article>
  )
}
export default TodoItem;