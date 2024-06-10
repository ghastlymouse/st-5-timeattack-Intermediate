import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useSelector(state => state.todo);

  return (
    <section>
      <h2>Working...</h2>
      <ul>
        {
          todos.filter(todo => !todo.isDone).map(todo => {
            return (
              <TodoItem key={todo.id} todo={todo} />
            );
          })
        }
      </ul>
      <h2>Done</h2>
      <ul>
        {
          todos.filter(todo => todo.isDone).map(todo => {
            return (
              <TodoItem key={todo.id} todo={todo} />
            );
          })
        }
      </ul>
    </section>
  );
}
