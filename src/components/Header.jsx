import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { logout, usuario } = useContext(AuthContext);

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>El Búho Lector</h1>
      <nav>
        <ul style={styles.navList}>
          <li><Link style={styles.link} to="/">Inicio</Link></li>
          <li><Link style={styles.link} to="/libros">Libros</Link></li>
          <li><Link style={styles.link} to="/autores">Autores</Link></li>
          <li><Link style={styles.link} to="/contacto">Contacto</Link></li>
          {usuario && (
            <li>
              <button onClick={logout} style={styles.logoutBtn}>Cerrar sesión</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#D9967E",
    padding: "1rem 2rem",
    margin: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  },
  logo: {
    margin: 0,
    fontSize: "1.7rem",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "1.2rem",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
  logoutBtn: {
    backgroundColor: "#fff",
    color: "#D9967E",
    border: "none",
    padding: "0.4rem 0.8rem",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Header;
