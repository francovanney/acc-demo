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
      <header className="main-header">
        <span>Demo Accesibilidad - Page 2</span>
      </header>
      <header>
        <h1 className="fake-h1">PAGE 2</h1>
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
          <a className="page-button" onClick={() => handleDivClick(2)}>
            Botón 2
          </a>
          <p className="page-button" onClick={() => handleDivClick(3)}>
            Botón 3
          </p>
        </div>
        <output className="page-log-box">{log}</output>
      </div>
    </>
  );
}
