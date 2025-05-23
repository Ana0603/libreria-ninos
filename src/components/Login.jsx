import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [usuario, setUsername] = useState("");
  const [clave, setPassword] = useState("");
  const [error, setError] = useState("");
  const [recuerdame, setRecuerdame] = useState(false);
  const navigate = useNavigate();
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === "usuario" && clave === "12345") {
      onLogin({ nombre: usuario }); 
      console.log(clave, usuario);
      navigate("/home");
      const usuarioLogueado = { nombre: usuario };

      if (recuerdame) {
        localStorage.setItem("usuario", JSON.stringify(usuarioLogueado));
      }

      onLogin(usuarioLogueado);
      navigate('/');
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-titulo">Iniciar Sesión</h2>
      <form className="formulario-login" onSubmit={handleSubmit}>
        <input
          className="input-usuario"
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input-clave"
          type="password"
          placeholder="Contraseña"
          value={clave}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <label>
            <input
              className="input-checkbox"
              type="checkbox"
              checked={recuerdame}
              onChange={(e) => setRecuerdame(e.target.checked)}
            />
            Recuérdame
          </label>
        </div>
        <button className="btn-inSesion" type="submit">Iniciar Sesión</button>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      </form>

      <div>
        <button className="btn-google">Iniciar con Google</button>
        <a className="registro" href="/registro">¿No tienes cuenta? Regístrate</a>
      </div>
    </div>
  );
}

export default Login;
