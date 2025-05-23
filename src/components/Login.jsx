import React, { useState } from "react";

function Login({ onLogin }) {
  const [usuario, setUsername] = useState("");
  const [clave, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === "usuario" && clave === "12345") {
      onLogin(usuario);
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={clave}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;