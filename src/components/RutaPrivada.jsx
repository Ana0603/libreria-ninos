import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaPrivada = ({ usuario, children }) => {
  return usuario ? children : <Navigate to="/login" replace />;
};

export default RutaPrivada;
