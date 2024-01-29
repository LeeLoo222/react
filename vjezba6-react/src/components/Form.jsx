import { FaPlusSquare } from "react-icons/fa";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputHandler = (event) => {
    const inputValue = event.target.value;
    setInputText(inputValue);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim() === "") {
      alert("Polje ne smije biti prazno!");
      return;
    }
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={inputHandler}
      />
      <button className="todo-button" type="submit" onClick={submitHandler}>
        <FaPlusSquare />
      </button>
    </form>
  );
};
export default Form;
