// Gerenciamento.jsx
import React from 'react';
import '../Styles/Gerenciamento.css';

import Menu from './Menu.jsx';
import Colaboradores from './Colaboradores.jsx';

function Gerenciamento() {
  return (
    <div className="root">
      <nav className="menu-container">
        <Menu />
      </nav>
      <main className='colaboradores-container'>
        <Colaboradores />
      </main>
    </div>
  );
}

export default Gerenciamento;
