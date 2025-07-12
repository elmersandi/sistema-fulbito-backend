import { useEffect, useState } from "react";

export default function Standings({ torneoId = 1 }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(`http://127.0.0.1:8000/api/public/standings/${torneoId}/`)
      .then(res => {
        if (!res.ok) throw new Error("Error al cargar posiciones");
        return res.json();
      })
      .then(res => setData(res))
      .catch(() => setError("No se pudo cargar la tabla de posiciones"))
      .finally(() => setLoading(false));
  }, [torneoId]);

  if (loading)
    return (
      <div className="tabla-posiciones-card">
        <div className="spinner"></div>
        <div>Cargando posiciones...</div>
      </div>
    );

  if (error)
    return <div className="tabla-posiciones-card error">{error}</div>;

  if (!data.length)
    return <div className="tabla-posiciones-card">No hay datos para mostrar.</div>;

  return (
    <section className="tabla-posiciones-card">
      <h2>Tabla de posiciones</h2>
      <table className="tabla-posiciones-table">
        <thead>
          <tr>
            <th>Equipo</th>
            <th>Puntos</th>
            <th>GF</th>
            <th>GC</th>
          </tr>
        </thead>
        <tbody>
          {data.map(fila => (
            <tr key={fila.equipo.id}>
              <td className="equipo-cell">
                {fila.equipo.logo && (
                  <img
                    src={fila.equipo.logo}
                    alt=""
                    className="equipo-logo"
                  />
                )}
                {fila.equipo.nombre}
              </td>
              <td>{fila.puntos}</td>
              <td>{fila.goles_favor}</td>
              <td>{fila.goles_contra}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
