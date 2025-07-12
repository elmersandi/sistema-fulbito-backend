import { useEffect, useState } from "react";

export default function Torneos() {
  const [torneos, setTorneos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/torneos/")
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => setTorneos(data))
      .catch(() => setError("No se pudo cargar la lista de torneos."));
  }, []);

  return (
    <div className="data-card">
      <h2 style={{ color: "#2176ff", marginBottom: 16 }}>Torneos Registrados</h2>
      {error && <div className="error">{error}</div>}
      <table className="table-pro">
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombre</th>
            <th>Temporada</th>
            <th>Descripción</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
          </tr>
        </thead>
        <tbody>
          {torneos.map(t => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.nombre}</td>
              <td>{t.temporada}</td>
              <td>{t.descripcion}</td>
              <td>{t.fecha_inicio}</td>
              <td>{t.fecha_fin}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {torneos.length === 0 && !error && <div style={{padding:16}}>No hay torneos registrados.</div>}
    </div>
  );
}
