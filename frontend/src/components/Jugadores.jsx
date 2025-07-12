import { useEffect, useState } from "react";
export default function Jugadores() {
  const [jugadores, setJugadores] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/jugadores/")
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => setJugadores(data))
      .catch(() => setError("No se pudo cargar la lista de jugadores."));
  }, []);

  return (
    <div className="data-card">
      <h2 style={{ color: "#2176ff", marginBottom: 16 }}>Jugadores</h2>
      {error && <div className="error">{error}</div>}
      <table className="table-pro">
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Fecha Nacimiento</th>
            <th>Posición</th>
            <th>Equipo</th>
          </tr>
        </thead>
        <tbody>
          {jugadores.map(j => (
            <tr key={j.id}>
              <td>{j.id}</td>
              <td>{j.nombres}</td>
              <td>{j.apellidos}</td>
              <td>{j.fecha_nacimiento}</td>
              <td>{j.posicion}</td>
              <td>{j.equipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {jugadores.length === 0 && !error && <div style={{padding:16}}>No hay jugadores registrados.</div>}
    </div>
  );
}
