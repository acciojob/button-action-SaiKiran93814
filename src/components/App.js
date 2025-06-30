import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        Show Paragraph
      </button>
      <p
        id="para"
        className={visible ? "show" : "hide"}
      >
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
    </div>
  );
}

export default App;
