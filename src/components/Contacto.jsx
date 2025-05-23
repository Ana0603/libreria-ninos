import React, { useState } from "react";
import './Contacto.css';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    asunto: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="contenedor-contacto">
      <div className="contacto-izquierda">
        <div className="caja-pregunta">
          <h2>¿Tienes preguntas?</h2>
          <p>Contáctanos a través del formulario o en nuestras redes sociales.</p>
          <div className="btn-redes">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://wa.me/123456789" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <div className="contacto-derecha">
        <h2 className="titulo-contacto">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="inputs-contacto">Nombre</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div>
            <label className="inputs-contacto">Asunto</label>
            <input
              type="text"
              name="asunto"
              onChange={handleChange}
              value={formData.asunto}
              required
            />
          </div>
          <div>
            <label className="inputs-contacto">Correo</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div>
            <label className="inputs-contacto">Mensaje</label>
            <textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-enviar">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
