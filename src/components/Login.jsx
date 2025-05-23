import React, { useState } from "react";
import './Login.css';

function Login({ onLogin }) {
  const [usuario, setUsername] = useState("");
  const [clave, setPassword] = useState("");
  const [error, setError] = useState("");
  const [recuerdame, setRecuerdame] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === "usuario" && clave === "12345") {
      onLogin(usuario);
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-titulo">Iniciar Sesión</h2>
      <form className="formulario-login" onSubmit={handleSubmit}>
        <input className="input-usuario"
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input className="input-clave"
          type="password"
          placeholder="Contraseña"
          value={clave}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <label>
            <input className="input-checkbox"
              type="checkbox"
              checked={recuerdame}
              onChange={(e) => setRecuerdame(e.target.checked)}
            />
            Recuérdame
          </label>
        </div>
        <button className="btn-inSesion" type="submit">Iniciar Sesión</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <div style={{ marginTop: "1rem" }}>
        <button className="btn-google"
          style={{
            background: "#fff",
            color: "#444",
            border: "1px solid #ccc",
            padding: "0.5rem 1rem",
            marginBottom: "0.5rem",
          }}
        >
          Inicar con Google
        </button>
        <br />
        <a className="registro" href="/registro">¿No tienes cuenta? Regístrate</a>
      </div>
    </div>
  );
}

export default Login;