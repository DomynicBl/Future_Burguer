// App.jsx

import React, { useState } from 'react';
import './App.css';
import Gerenciamento from "./components/screens/Gerenciamento.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Gerenciamento />
    </div>
  );
}

export default App;
