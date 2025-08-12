import { useState } from "react";
import "./Page1.css";

// Página accesible
export default function Page1() {
  const [log, setLog] = useState("");
  const handleClick = (num) => {
    setLog(`Formulario Numero ${num} Enviado`);
  };
  return (
    <>
      <header className="main-header">Demo Accesibilidad - Page 1</header>
      <header>
        <h1>PAGE 1</h1>
      </header>
      <main>
        <picture></picture>
        <ul className="page-buttons-row">
          <li>
            <button
              type="button"
              aria-label="Enviar Formulario"
              className="page-button-1"
              onClick={() => handleClick(1)}
            >
              Enviar
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Enviar Formulario"
              className="page-button-1"
              onClick={() => handleClick(2)}
            >
              Enviar
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Enviar Formulario"
              className="page-button-1"
              onClick={() => handleClick(3)}
            >
              Enviar
            </button>
          </li>
        </ul>
        <output className="page-log-box">{log}</output>
      </main>
    </>
  );
}
