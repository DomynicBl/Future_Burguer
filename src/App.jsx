// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gerenciamento from "./components/screens/Gerenciamento.jsx";
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
        {/*</Route>*/}
      </Routes>
    </Router>
  );
}

export default App;
