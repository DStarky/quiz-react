import { useState } from "react";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

function App() {
  const [isStart, setStart] = useState(false);

  return (
    <div className="App">
      <Button setStart={setStart} isStart={isStart} text="Start QUIZ" />
      <Modal setStart={setStart} isStart={isStart} />
    </div>
  );
}

export default App;
