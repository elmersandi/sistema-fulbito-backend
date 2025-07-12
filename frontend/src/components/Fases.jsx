import { useEffect, useState } from "react";
export default function Fases() {
  const [fases, setFases] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/fases/")
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => setFases(data))
      .catch(() => setError("No se pudo cargar la lista de fases."));
  }, []);

  return (
    <div className="data-card">
      <h2 style={{ color: "#2176ff", marginBottom: 16 }}>Fases</h2>
      {error && <div className="error">{error}</div>}
      <table className="table-pro">
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombre</th>
            <th>Orden</th>
            <th>Torneo</th>
          </tr>
        </thead>
        <tbody>
          {fases.map(f => (
            <tr key={f.id}>
              <td>{f.id}</td>
              <td>{f.nombre}</td>
              <td>{f.orden}</td>
              <td>{f.torneo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {fases.length === 0 && !error && <div style={{padding:16}}>No hay fases registradas.</div>}
    </div>
  );
}
