import { useAddTodoMutation } from "../api/apiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const AddTodo = ({ data }) => {
  const [newTodo, setNewTodo] = useState('');
  const [addTodo] = useAddTodoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // id: n+1, n....3,2,1
    const id = data.length > 0 ? data[0].id + 1 : 1;

    addTodo({ id, title: newTodo, completed: false });
    setNewTodo('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add todo..."
      />
      <button>
        <FontAwesomeIcon icon={faUpload} />
      </button>
    </form>
  )
}
export default AddTodo;