// Gerenciamento.jsx
import React from 'react';
import '../Styles/Gerenciamento.css';

import Menu from './Menu.jsx';
import Painel from './Painel.jsx';

function Gerenciamento() {
  return (
    <div className="root">
      <nav className="menu-container">
        <Menu />
      </nav>
      <main className='colaboradores-container'>
          <Painel />
      </main>
    </div>
  );
}

export default Gerenciamento;
