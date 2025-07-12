import { useEffect, useState } from "react";
export default function Estadios() {
  const [estadios, setEstadios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/estadios/")
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => setEstadios(data))
      .catch(() => setError("No se pudo cargar la lista de estadios."));
  }, []);

  return (
    <div className="data-card">
      <h2 style={{ color: "#2176ff", marginBottom: 16 }}>Estadios</h2>
      {error && <div className="error">{error}</div>}
      <table className="table-pro">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Ciudad</th>
            <th>Capacidad</th>
          </tr>
        </thead>
        <tbody>
          {estadios.map(e => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.nombre}</td>
              <td>{e.direccion}</td>
              <td>{e.ciudad}</td>
              <td>{e.capacidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {estadios.length === 0 && !error && <div style={{padding:16}}>No hay estadios registrados.</div>}
    </div>
  );
}

