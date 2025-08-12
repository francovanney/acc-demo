import React, { useState } from "react";
import "./Page2.css";

// Página no accesible - violaciones estructurales imperceptibles
export default function Page2() {
  const [log, setLog] = useState("");
  const handleDivClick = (num) => {
    setLog(`Botón ${num} presionado`);
  };
  return (
    <>
      <div className="main-header">
        <span>Demo Accesibilidad - Page 2</span>
      </div>
      <div>
        <div className="fake-h1">PAGE 2</div>
        <div className="page-buttons-row">
          <button
            className="page-button"
            onClick={() => handleDivClick(1)}
            type="button"
          >
            Enviar
          </button>
          <a className="page-button" onClick={() => handleDivClick(2)}>
            Enviar
          </a>
          <p className="page-button" onClick={() => handleDivClick(3)}>
            Enviar
          </p>
        </div>
        <div className="page-log-box">{log}</div>
      </div>
    </>
  );
}
