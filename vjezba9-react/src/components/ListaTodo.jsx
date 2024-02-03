import HOC from "../HOC";

const ListaTodo = ({ podaci }) => {
  let filterTodos = podaci.map((todo, index) => {
    return (
      <div key={`${todo.userId}-${index}`}>
        <p>{todo.title}</p>
      </div>
    );
  });

  return <div>{filterTodos}</div>;
};

const SearchTodos = HOC(ListaTodo, "todos");

export default SearchTodos;
