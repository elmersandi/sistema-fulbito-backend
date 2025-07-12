import { useEffect, useState } from "react";
export default function Partidos() {
  const [partidos, setPartidos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/partidos/")
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => setPartidos(data))
      .catch(() => setError("No se pudo cargar la lista de partidos."));
  }, []);

  return (
    <div className="data-card">
      <h2 style={{ color: "#2176ff", marginBottom: 16 }}>Partidos</h2>
      {error && <div className="error">{error}</div>}
      <table className="table-pro">
        <thead>
          <tr>
            <th>N°</th>
            <th>Fecha Hora</th>
            <th>Equipo Local</th>
            <th>Equipo Visitante</th>
            <th>Fase</th>
            <th>Estadio</th>
            <th>Torneo</th>
          </tr>
        </thead>
        <tbody>
          {partidos.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.fecha_hora}</td>
              <td>{p.equipo_local}</td>
              <td>{p.equipo_visitante}</td>
              <td>{p.fase}</td>
              <td>{p.estadio}</td>
              <td>{p.torneo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {partidos.length === 0 && !error && <div style={{padding:16}}>No hay partidos registrados.</div>}
    </div>
  );
}
