import "./TodoForm.css";

export const TodoForm = ({ onAddTodo }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const todoTitle = event.target.elements.todoTitle.value;
    const todo = {
      id: Date.now(),
      title: todoTitle,
      completed: false,
      createdAt: new Date(),
    };
    onAddTodo && onAddTodo(todo);
    event.target.reset(); // フォームのリセット
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-form__input"
        type="text"
        name="todoTitle"
        placeholder="何を終わらせたいですか？"
        required
      />
      <button className="todo-form__button" type="submit">
        Add
      </button>
    </form>
  );
};
