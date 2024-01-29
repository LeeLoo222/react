import { useRef, useState } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    const inputCurrent = inputRef.current.value;
    setInputValue(inputCurrent);
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Unesite nešto..." />
      <button onClick={handleClick}>Dohvati i ažuriraj vrijednost</button>
      <p>Trenutna vrijednost input polja:{inputValue}</p>
    </div>
  );
};

export default UseRef;
