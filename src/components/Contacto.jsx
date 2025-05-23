import React, { useState } from "react";
import './Contacto.css';

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
      <h2 className="titulo-contacto">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="inputs-contacto">Nombre</label>
          <input
            type="text"
            name="nombre"
            onChange={handleChange}
            value={formData.name}
            className="w-full border px-3 py-2 rounded"
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
            className="w-full border px-3 py-2 rounded"
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
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="inputs-contacto">Mensaje</label>
          <textarea
            name="message"
            onChange={handleChange}
            value={formData.message}
            className="w-full border px-3 py-2 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn-enviar"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
