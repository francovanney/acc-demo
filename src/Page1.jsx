import React, { useState } from "react";
import "./Page1.css";

// Página accesible
export default function Page1() {
  const [log, setLog] = useState("");
  const handleClick = (num) => {
    setLog(`Botón ${num} presionado`);
  };
  return (
    <>
      <header className="main-header">
        <nav>
          <span>Demo Accesibilidad - Page 1</span>
        </nav>
      </header>
      <header>
        <h1>PAGE 1</h1>
      </header>
      <main>
        <div className="page-buttons-row">
          <button className="page-button" onClick={() => handleClick(1)}>
            Botón 1
          </button>
          <button className="page-button" onClick={() => handleClick(2)}>
            Botón 2
          </button>
          <button className="page-button" onClick={() => handleClick(3)}>
            Botón 3
          </button>
        </div>
        <div className="page-log">
          <strong>Log:</strong>
          <div className="page-log-box">{log}</div>
        </div>
      </main>
    </>
  );
}
