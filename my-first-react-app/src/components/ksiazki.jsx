import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  const ksiazki = ["Wiedźmin", "Pan Tadeusz", "Lalka", "Solaris"];

  const [imie, setImie] = useState("");
  const [numer, setNumer] = useState("");

  function wypozyczKsiazke() {
    if (numer >= 1 && numer <= ksiazki.length) {
      console.log(
        "Wypożyczenie:",
        imie,
        "książka:",
        ksiazki[numer - 1]
      );
    } else {
      console.log("Nieprawidłowy numer książki");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dostępne książki: {ksiazki.length}</h2>

      <ol>
        {ksiazki.map((ksiazka, index) => (
          <li key={index}>{ksiazka}</li>
        ))}
      </ol>

      <form>
        <div className="mb-3">
          <label htmlFor="imie"  className="form-label">
            Imię czytelnika:
          </label>

          <input
            id="imie"
            type="text"
            className="form-control"
            value={imie}
            onChange={(e) => setImie(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="numer" className="form-label">
            Numer książki:
          </label>

          <input
            id="numer"
            type="number"
            className="form-control"
            value={numer}
            onChange={(e) => setNumer(e.target.value)}
          />
        </div>
        <div className="mb-3">
        <button
          type="button"
          className="btn btn-danger"
          onClick={wypozyczKsiazke}>
          Wypożycz
        </button>
        </div>
      </form>
    </div>
  );
}

export default App;