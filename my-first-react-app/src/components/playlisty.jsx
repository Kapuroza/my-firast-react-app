import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export function Playlisty() {
  const [utwory, setUtwory] = useState([
    { id: 1, nazwa: "Bohemian Rhapsody", kategoria: 1, odtworzenia: 32 },
    { id: 2, nazwa: "Blinding Lights", kategoria: 2, odtworzenia: 33 },
    { id: 3, nazwa: "Hit the Road Jack", kategoria: 3, odtworzenia: 34 }
  ]);

  const [rock, setRock] = useState(true);
  const [pop, setPop] = useState(true);
  const [jazz, setJazz] = useState(true);

  function odtworz(id) {
    setUtwory(
      utwory.map((u) => u.id === id ? { ...u, odtworzenia: u.odtworzenia + 1 } : u)
    );
  }

  const czyWidoczna = (kategoria) => {
    if (kategoria === 1) return rock;
    if (kategoria === 2) return pop;
    if (kategoria === 3) return jazz;
    return false;
  };

  return (
    <div className="text-center" style={{ padding: "20px" }}>
      <h1>Playlista</h1>

      <div className="mb-3 d-inline-block text-start">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="rockSwitch"
            checked={rock}
            onChange={() => setRock(!rock)}
          />
          <label className="form-check-label ms-2" htmlFor="rockSwitch">Rock</label>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="popSwitch"
            checked={pop}
            onChange={() => setPop(!pop)}
          />
          <label className="form-check-label ms-2" htmlFor="popSwitch">Pop</label>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="jazzSwitch"
            checked={jazz}
            onChange={() => setJazz(!jazz)}
          />
          <label className="form-check-label ms-2" htmlFor="jazzSwitch">Jazz</label>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {utwory
          .filter((u) => czyWidoczna(u.kategoria))
          .map((u) => (
            <div key={u.id} className="text-center" style={{ margin: "5px" }}>
              <div className="p-3 bg-secondary text-white rounded" style={{ margin: "5px" }}>
                {u.nazwa}
              </div>
              <h4>Odtworzeń: {u.odtworzenia}</h4>
              <button className="btn btn-primary" onClick={() => odtworz(u.id)}>
                Odtwórz
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}