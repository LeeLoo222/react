import { useReducer } from "react";
import { PostReducer, POCETNO_STANJE } from "./PostReducer";

const App = () => {
  const [state, dispatch] = useReducer(PostReducer, POCETNO_STANJE);

  const postFetch = () => {
    dispatch({ type: "FETCH_START" });
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_USPJEH", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  };

  return (
    <div>
      <button onClick={postFetch}>
        {state.loading ? "Dohvati usere" : "Učitavamo"}
      </button>
      <p>{state.post.title}</p>
      <p>{state.error && "Došlo je do greške"}</p>
    </div>
  );
};

export default App;
