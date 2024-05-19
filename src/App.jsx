// App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gerenciamento from "./components/screens/Gerenciamento.jsx";
import Login from "./components/screens/Login.jsx";
import Cadastro from "./components/screens/Cadastro.jsx";
import Desenvolvimento from "./components/screens/Desenvolvimento.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gerenciamento />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/desenvolvimento" element={<Desenvolvimento />} />
      </Routes>
    </Router>
  );
}

export default App;
