import { useEffect, useState } from "react";
export default function Grupos() {
  const [grupos, setGrupos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/grupos/")
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => setGrupos(data))
      .catch(() => setError("No se pudo cargar la lista de grupos."));
  }, []);

  return (
    <div className="data-card">
      <h2 style={{ color: "#2176ff", marginBottom: 16 }}>Grupos</h2>
      {error && <div className="error">{error}</div>}
      <table className="table-pro">
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombre</th>
            <th>Fase</th>
          </tr>
        </thead>
        <tbody>
          {grupos.map(g => (
            <tr key={g.id}>
              <td>{g.id}</td>
              <td>{g.nombre}</td>
              <td>{g.fase}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {grupos.length === 0 && !error && <div style={{padding:16}}>No hay grupos registrados.</div>}
    </div>
  );
}
