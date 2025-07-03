import { useGetTodosQuery } from '../api/apiSlice';
import AddTodo from "./AddTodo";
import TodoItem from './TodoItem';
import { Loading, Error } from "../../components/LoaderAndError";



const TodoList = () => {

  const { data, error, isLoading, isSuccess } = useGetTodosQuery();

  // conditional element assignment to content variable
  let content;

  if (isLoading) content = <Loading />
  else if (error) content = <Error error={error} />
  else if (isSuccess) content = (
    <section className="scroll">
      {data.length > 0
        ? data.map(todo => <TodoItem key={todo.id} todo={todo} />)
        : <p className='status'>Nothing to display</p>
      }
    </section>
  )

  return (
    <main className="App">
      <AddTodo />
      {content}
    </main>
  )
}
export default TodoList;