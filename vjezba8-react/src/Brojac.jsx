import { useReducer } from "react";

const brojacReducer = (state, action) => {
  switch (action.type) {
    case "UVECAJ":
      return { broj: state.broj + 1 };
    case "SMANJI":
      return { broj: state.broj - 1 };
    default:
      return state;
  }
};

const Brojac = () => {
  const [state, dispatch] = useReducer(brojacReducer, { broj: 0 });

  return (
    <div>
      <p>Brojac: {state.broj}</p>
      <button onClick={() => dispatch({ type: "UVECAJ" })}>Uvećaj</button>
      <button onClick={() => dispatch({ type: "SMANJI" })}>Smanji</button>
    </div>
  );
};

export default Brojac;
