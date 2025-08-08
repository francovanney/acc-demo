import React, { useState } from "react";
import "./Page2.css";

// Página no accesible visualmente similar
export default function Page2() {
  const [log, setLog] = useState("");
  const handleDivClick = (num) => {
    setLog(`Botón ${num} presionado`);
  };
  return (
    <>
      <header>
        <div className="fake-h1">PAGE 2</div>
      </header>
      <div>
        <div className="page-buttons-row">
          <button
            className="page-button"
            onClick={() => handleDivClick(1)}
            type="button"
          >
            Botón 1
          </button>
          <div className="page-button">Botón 2</div>
          <span className="page-button">Botón 3</span>
        </div>
        <div className="page-log">
          <strong>Log:</strong>
          <div className="page-log-box">{log}</div>
        </div>
      </div>
    </>
  );
}
