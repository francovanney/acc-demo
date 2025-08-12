import React, { useState } from "react";
import "./Page2.css";
import avenga from "./assets/avenga.jpg";

// Página no accesible - violaciones estructurales imperceptibles
export default function Page2() {
  const [log, setLog] = useState("");
  const handleDivClick = (num) => {
    setLog(`Botón ${num} presionado`);
  };
  return (
    <>
      {/* SIN Skip Link - Violación de accesibilidad */}

      {/* Header NO accesible - clon exacto de Page1 pero con divs */}
      <div className="site-header">
        <div className="header-container">
          <div className="site-title">
            <span>Page 2</span>
          </div>
          <div className="main-navigation">
            <div className="nav-list">
              <div>
                <div
                  className="nav-link"
                  onClick={() => (window.location.href = "/page1")}
                >
                  Page 1
                </div>
              </div>
              <div>
                <div
                  className="nav-link current"
                  onClick={() => (window.location.href = "/page2")}
                >
                  Page 2
                </div>
              </div>
              <div>
                <div
                  className="nav-link"
                  onClick={() => (window.location.href = "/about")}
                >
                  Acerca de
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal SIN landmark apropiado */}
      <div className="page-content">
        <div className="fake-h1">Page 2</div>

        <div className="logo-container-bad">
          <img src={avenga} width={300} height="auto" />
        </div>

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
