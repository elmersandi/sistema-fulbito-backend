import { useEffect, useState } from "react";

export default function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/eventos/")
      .then(res => res.json())
      .then(data => setEventos(data))
      .catch(() => setError("No se pudo cargar la lista de eventos."));
  }, []);

  return (
    <div className="data-card">
      <h2 style={{ fontWeight: 800, color: "#2563eb", marginBottom: "1.3rem" }}>
        Eventos del Partido
      </h2>

      <h3 style={{ fontWeight: 700, fontSize: "1.18em", marginBottom: 16 }}>Lista de Eventos del Partido</h3>

      {error ? (
        <div className="error">{error}</div>
      ) : (
        <table className="table-pro">
          <thead>
            <tr>
              <th>N°</th>
              <th>Minuto</th>
              <th>Tipo de Evento</th>
              <th>Jugador</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {eventos.map((ev) => (
              <tr key={ev.id}>
                <td>{ev.id}</td>
                <td>{ev.minuto}</td>
                <td>{ev.tipo_evento}</td>
                <td>
                  {ev.jugador
                    ? `${ev.jugador.nombres} ${ev.jugador.apellidos} (${ev.jugador.posicion})`
                    : "-"}
                </td>
                <td>{ev.descripcion || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

