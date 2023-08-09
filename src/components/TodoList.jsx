import { TodoItem } from "./TodoItem";
import "./TodoList.css";

export const TodoList = ({ todos, onToggleTodo }) => (
  <ul className="todo-list">
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
    ))}
  </ul>
);
