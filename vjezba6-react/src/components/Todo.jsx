import { FaCheck, FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ text, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completedHandler}>
        <FaCheck />
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

export default Todo;
