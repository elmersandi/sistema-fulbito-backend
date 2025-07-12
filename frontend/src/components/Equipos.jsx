import { useEffect, useState } from "react";
export default function Equipos() {
  const [equipos, setEquipos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/equipos/")
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => setEquipos(data))
      .catch(() => setError("No se pudo cargar la lista de equipos."));
  }, []);

  return (
    <div className="data-card">
      <h2 style={{ color: "#2176ff", marginBottom: 16 }}>Equipos</h2>
      {error && <div className="error">{error}</div>}
      <table className="table-pro">
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombre</th>
            <th>Entrenador</th>
            <th>Fundado</th>
            <th>Grupo</th>
          </tr>
        </thead>
        <tbody>
          {equipos.map(e => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.nombre}</td>
              <td>{e.entrenador}</td>
              <td>{e.fundado}</td>
              <td>{e.grupo ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {equipos.length === 0 && !error && <div style={{padding:16}}>No hay equipos registrados.</div>}
    </div>
  );
}
