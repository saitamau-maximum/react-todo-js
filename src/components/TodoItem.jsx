import "./TodoItem.css";

export const TodoItem = ({ todo, onToggleTodo }) => {
  const todoItemHtmlId = `todo-item-${todo.id}`;

  return (
    <li className="todo-item">
      <input
        id={todoItemHtmlId}
        className="todo-item__checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleTodo(todo.id)}
      />
      <label
        htmlFor={todoItemHtmlId}
        className={
          "todo-item__title" +
          (todo.completed ? " todo-item__title--completed" : "")
        }
      >
        {todo.title}
      </label>
      <span className="todo-item__created-at">
        {todo.createdAt.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
    </li>
  );
};
