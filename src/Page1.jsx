import { useState } from "react";
import "./Page1.css";
import avenga from "./assets/avenga.jpg";

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
        <div className="logo-container">
          <img
            src={avenga}
            alt="Logotipo de Avenga, empresa de consultoría tecnológica y transformación digital"
            width={300}
            height="auto"
            role="img"
            tabIndex={0}
          />
        </div>
        <ul className="page-buttons-row">
          <li>
            <button
              type="button"
              aria-label="Enviar Formulario 1"
              className="page-button-1"
              onClick={() => handleClick(1)}
            >
              Enviar
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Enviar Formulario 2"
              className="page-button-1"
              onClick={() => handleClick(2)}
            >
              Enviar
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-label="Enviar Formulario 3"
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
