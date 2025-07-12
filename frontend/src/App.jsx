import { useState } from "react";
// Importa tus componentes
import Torneos from "./components/Torneos";
import Fases from "./components/Fases";
import Grupos from "./components/Grupos";
import Equipos from "./components/Equipos";
import Jugadores from "./components/Jugadores";
import Arbitros from "./components/Arbitros";
import Estadios from "./components/Estadios";
import Partidos from "./components/Partidos";
import Eventos from "./components/Eventos";
import TablaPosiciones from "./components/TablaPosiciones";
import "./App.css";

export default function App() {
  const [menuActivo, setMenuActivo] = useState(false);
  const [opcion, setOpcion] = useState("");

  // Opciones del menú
  const menu = [
    { nombre: "Torneos", comp: <Torneos /> },
    { nombre: "Fases", comp: <Fases /> },
    { nombre: "Grupos", comp: <Grupos /> },
    { nombre: "Equipos", comp: <Equipos /> },
    { nombre: "Jugadores", comp: <Jugadores /> },
    { nombre: "Árbitros", comp: <Arbitros /> },
    { nombre: "Estadios", comp: <Estadios /> },
    { nombre: "Partidos", comp: <Partidos /> },
    { nombre: "Eventos", comp: <Eventos /> },
    { nombre: "Tabla de Posiciones", comp: <TablaPosiciones /> },
  ];

  // =============== PANTALLA DE BIENVENIDA ===================
  if (!menuActivo) {
    return (
      <div className="main-bg">
        <div className="welcome-card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React logo"
            className="welcome-logo"
          />
          <h1>
            <span className="bienvenida">¡Bienvenido a</span>{" "}
            <span className="appname">Fulbito App</span>
          </h1>
          <p className="welcome-desc">
            Gestiona tus campeonatos, jugadores y partidos de manera fácil y visual.<br />
            Haz click en ingresar para empezar.
          </p>
          <button className="btn btn-main" onClick={() => setMenuActivo(true)}>
            Ingresar
          </button>
          <footer className="welcome-footer">
            <span>
              <b>Elmer</b> • {new Date().getFullYear()}
            </span>
          </footer>
        </div>
      </div>
    );
  }

  // =============== DASHBOARD ===================
  return (
    <div
      className="main-bg"
      style={{ justifyContent: "flex-start", alignItems: "flex-start" }}
    >
      {/* MENÚ LATERAL */}
      <nav className="menu-principal">
        <h2>Menú principal</h2>
        <ul>
          {menu.map((item, i) => (
            <li key={i}>
              <button
                className={`menu-btn${opcion === item.nombre ? " selected" : ""}`}
                onClick={() => setOpcion(item.nombre)}
              >
                {item.nombre}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main
        style={{
          marginLeft: "320px",
          width: "calc(100vw - 370px)",
          padding: "3.5rem 1.8rem 2.5rem 1.8rem",
          minHeight: "100vh",
          display: opcion ? "block" : "none",
        }}
      >
        {opcion && (
          <div className="componente">
            <h2
              style={{
                fontWeight: 800,
                color: "#2563eb",
                fontSize: "1.5rem",
                marginBottom: "1.2rem",
              }}
            >
              {opcion}
            </h2>
            {menu.find((item) => item.nombre === opcion)?.comp}
            <button
              className="btn"
              style={{ marginTop: 28 }}
              onClick={() => setOpcion("")}
            >
              Volver al menú
            </button>
          </div>
        )}
      </main>
    </div>
  );
}


