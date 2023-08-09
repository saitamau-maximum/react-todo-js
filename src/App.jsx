import { useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

const INITIAL_TODOS = [
  {
    id: 1,
    title: "期末レポートを書く",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "テスト勉強する",
    completed: false,
    createdAt: new Date(),
  },
];

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const handleToggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });
    setTodos(newTodos);
  };

  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleTodo={handleToggleTodo} />
    </div>
  );
}

export default App;
