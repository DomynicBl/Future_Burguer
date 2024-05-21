// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gerenciamento from "./components/screens/Gerenciamento.jsx";
import Gerenciamento2 from "./components/screens/Gerenciamento2.jsx";
import Login from "./components/screens/Login.jsx";
import Cadastro from "./components/screens/Cadastro.jsx";
import Desenvolvimento from "./components/screens/Desenvolvimento.jsx";
import ProtegerRotas from "./ProtegerRotas.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rotas Protegidas */}
        {/*<Route element={<ProtegerRotas />}>*/}
          <Route path="/" element={<Gerenciamento />} />
          <Route path="/desenvolvimento" element={<Desenvolvimento />} />
          <Route path="/painel" element={<Gerenciamento2 />} />
        {/*</Route>*/}
      </Routes>
    </Router>
  );
}

export default App;
