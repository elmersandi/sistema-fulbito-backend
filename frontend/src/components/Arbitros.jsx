import { useEffect, useState } from "react";
export default function Arbitros() {
  const [arbitros, setArbitros] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/arbitros/")
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => setArbitros(data))
      .catch(() => setError("No se pudo cargar la lista de árbitros."));
  }, []);

  return (
    <div className="data-card">
      <h2 style={{ color: "#2176ff", marginBottom: 16 }}>Árbitros</h2>
      {error && <div className="error">{error}</div>}
      <table className="table-pro">
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {arbitros.map(a => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.nombres}</td>
              <td>{a.apellidos}</td>
              <td>{a.categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {arbitros.length === 0 && !error && <div style={{padding:16}}>No hay árbitros registrados.</div>}
    </div>
  );
}
