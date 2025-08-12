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
      {/* Skip Link - Solo visible al hacer focus */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      {/* Header con navegación accesible */}
      <header className="site-header" role="banner">
        <div className="header-container">
          <div className="site-title">
            <span>Page 1</span>
          </div>

          <nav
            className="main-navigation"
            role="navigation"
            aria-label="Navegación principal"
          >
            <ul className="nav-list">
              <li>
                <a
                  href="/page1"
                  className="nav-link current"
                  aria-current="page"
                  aria-label="Página 1 (página actual)"
                >
                  Page 1
                </a>
              </li>
              <li>
                <a href="/page2" className="nav-link" aria-label="Página 2">
                  Page 2
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="nav-link"
                  aria-label="Acerca de este demo"
                >
                  Acerca de
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Contenido principal */}
      <main id="main-content" role="main" tabIndex="-1">
        <header className="page-header">
          <h1
            tabIndex="0"
            aria-label="Página 1 - Demostración de accesibilidad"
          >
            Page 1
          </h1>
        </header>
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
