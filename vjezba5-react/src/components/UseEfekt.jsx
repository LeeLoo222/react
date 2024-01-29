import { useState, useEffect } from "react";

const UseEfekt = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [ime, setIme] = useState("");

  /* Na prvom renderu/učitavanju/mountanju - učitavam se jednom kao ComponentDidMount iz klasa */
  useEffect(() => {
    console.log("Učitao se prilikom mountanja komponente na DOM");
  }, []);

  /* Učitavam se na prvom renderu i onda kada se promijeni vrijednost varijable ime */
  useEffect(() => {
    console.log(`Ime se promijenilo, sad je ${ime}`);
  }, [ime]);

  /* Ovakav useEffect će se renderirat prilikom svake promjene širine prozora. */
  useEffect(() => {
    window.addEventListener("resize", updateW);
    console.log("učitavam se stalno!");
  }, []);

  const updateW = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div>
      <p>Širina prozora: {windowWidth}</p>
      <input type="text" value={ime} onChange={(e) => setIme(e.target.value)} />
    </div>
  );
};

export default UseEfekt;
