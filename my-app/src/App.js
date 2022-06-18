import "./App.css";
import { useState } from "react";
import Title from "./components/Title.js";

function App() {
  const [open, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  if (open === true) {
    return (
      <div>
        <Title name="Lena" type="bold" />
        <Title name="Lena" />
      </div>
    );
  }
  return <button onClick={handleOpen}>Open titles</button>;
}

export default App;
