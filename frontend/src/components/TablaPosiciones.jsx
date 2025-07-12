// src/components/TablaPosiciones.jsx
const grupos = [
  {
    nombre: "Grupo A",
    equipos: [
      {
        club: "Real Madrid",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
        pj: 3, g: 2, e: 1, p: 0, gf: 8, gc: 2, dg: 6, pts: 7,
        ultimos: ["G", "G", "E"]
      },
      {
        club: "Monterrey",
        logo: "https://upload.wikimedia.org/wikipedia/en/e/ea/C.F._Monterrey_logo.svg",
        pj: 3, g: 2, e: 0, p: 1, gf: 6, gc: 4, dg: 2, pts: 6,
        ultimos: ["G", "P", "G"]
      },
      {
        club: "Al Ahly",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/66/Al-Ahly_SC_logo.svg",
        pj: 3, g: 1, e: 0, p: 2, gf: 3, gc: 7, dg: -4, pts: 3,
        ultimos: ["P", "G", "P"]
      },
      {
        club: "Urawa Red Diamonds",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/c1/Urawa_Red_Diamonds_logo.svg",
        pj: 3, g: 0, e: 1, p: 2, gf: 2, gc: 6, dg: -4, pts: 1,
        ultimos: ["E", "P", "P"]
      }
    ]
  },
  {
    nombre: "Grupo B",
    equipos: [
      {
        club: "Manchester City",
        logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
        pj: 3, g: 3, e: 0, p: 0, gf: 9, gc: 2, dg: 7, pts: 9,
        ultimos: ["G", "G", "G"]
      },
      {
        club: "Fluminense",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Fluminense_FC_escudo.png",
        pj: 3, g: 1, e: 1, p: 1, gf: 5, gc: 5, dg: 0, pts: 4,
        ultimos: ["P", "E", "G"]
      },
      {
        club: "Al Hilal",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Al_Hilal_SFC_logo.png",
        pj: 3, g: 1, e: 0, p: 2, gf: 4, gc: 6, dg: -2, pts: 3,
        ultimos: ["P", "P", "G"]
      },
      {
        club: "Auckland City",
        logo: "https://upload.wikimedia.org/wikipedia/en/f/ff/Auckland_City_FC_logo.svg",
        pj: 3, g: 0, e: 1, p: 2, gf: 1, gc: 6, dg: -5, pts: 1,
        ultimos: ["E", "P", "P"]
      }
    ]
  },
  {
    nombre: "Grupo C",
    equipos: [
      {
        club: "Club León",
        logo: "https://upload.wikimedia.org/wikipedia/en/1/14/Club_Le%C3%B3n_logo.svg",
        pj: 3, g: 2, e: 0, p: 1, gf: 7, gc: 4, dg: 3, pts: 6,
        ultimos: ["P", "G", "G"]
      },
      {
        club: "Al Nassr",
        logo: "https://upload.wikimedia.org/wikipedia/en/2/2a/Al-Nassr_FC_logo.svg",
        pj: 3, g: 2, e: 0, p: 1, gf: 6, gc: 4, dg: 2, pts: 6,
        ultimos: ["G", "G", "P"]
      },
      {
        club: "Wydad Casablanca",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/Wydad_AC_logo.png",
        pj: 3, g: 1, e: 1, p: 1, gf: 3, gc: 4, dg: -1, pts: 4,
        ultimos: ["G", "P", "E"]
      },
      {
        club: "Mamelodi Sundowns",
        logo: "https://upload.wikimedia.org/wikipedia/en/d/d0/Mamelodi_Sundowns_FC_logo.svg",
        pj: 3, g: 0, e: 1, p: 2, gf: 2, gc: 6, dg: -4, pts: 1,
        ultimos: ["P", "E", "P"]
      }
    ]
  },
  {
    nombre: "Grupo D",
    equipos: [
      {
        club: "Palmeiras",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg",
        pj: 3, g: 3, e: 0, p: 0, gf: 8, gc: 3, dg: 5, pts: 9,
        ultimos: ["G", "G", "G"]
      },
      {
        club: "Al Ittihad",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Al-Ittihad_Logo.svg",
        pj: 3, g: 2, e: 0, p: 1, gf: 7, gc: 5, dg: 2, pts: 6,
        ultimos: ["G", "G", "P"]
      },
      {
        club: "Seattle Sounders",
        logo: "https://upload.wikimedia.org/wikipedia/en/9/96/Seattle_Sounders_FC_2014_logo.svg",
        pj: 3, g: 1, e: 0, p: 2, gf: 3, gc: 5, dg: -2, pts: 3,
        ultimos: ["P", "G", "P"]
      },
      {
        club: "Sydney FC",
        logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Sydney_FC_logo.svg",
        pj: 3, g: 0, e: 0, p: 3, gf: 2, gc: 7, dg: -5, pts: 0,
        ultimos: ["P", "P", "P"]
      }
    ]
  }
];

export default function TablaPosiciones() {
  return (
    <div>
      {grupos.map((grupo, idx) => (
        <div className="tabla-posiciones-card" key={idx}>
          <h2>{grupo.nombre}</h2>
          <table className="tabla-posiciones-table">
            <thead>
              <tr>
                <th>Club</th>
                <th>PJ</th>
                <th>G</th>
                <th>E</th>
                <th>P</th>
                <th>GF</th>
                <th>GC</th>
                <th>DG</th>
                <th>Pts</th>
                <th>Últimos 3</th>
              </tr>
            </thead>
            <tbody>
              {grupo.equipos.map((row, i) => (
                <tr key={row.club}>
                  <td className="equipo-cell">
                    <img src={row.logo} className="equipo-logo" alt={row.club} />
                    {row.club}
                  </td>
                  <td>{row.pj}</td>
                  <td>{row.g}</td>
                  <td>{row.e}</td>
                  <td>{row.p}</td>
                  <td>{row.gf}</td>
                  <td>{row.gc}</td>
                  <td>{row.dg}</td>
                  <td><b>{row.pts}</b></td>
                  <td>
                    {row.ultimos.map((res, idx2) => (
                      <span
                        key={idx2}
                        style={{
                          display: "inline-block",
                          width: 15, height: 15, borderRadius: "50%",
                          margin: "0 2px",
                          background:
                            res === "G" ? "#43ea70"
                            : res === "E" ? "#eee64b"
                            : "#ea4343"
                        }}
                        title={
                          res === "G" ? "Victoria"
                          : res === "E" ? "Empate"
                          : "Derrota"
                        }
                      ></span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}


