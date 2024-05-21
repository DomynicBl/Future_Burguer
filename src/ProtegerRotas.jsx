// ProtegerRotas.jsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtegerRotas = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Verificando autenticação...");
    const token = Cookies.get('token');
    if (!token) {
      console.log("Usuário não autenticado. Redirecionando para login...");
      navigate('/login');
    }
  }, [navigate]);

  return children;
};

export default ProtegerRotas;
