// Gerenciamento.jsx

import React from 'react';
import '../Styles/Gerenciamento.css';

import Menu from './Menu.jsx';
import Colaboradores from './Colaboradores.jsx';
import Login from './Login.jsx';
import Cadastro from './Cadastro.jsx';
import Desenvolvimento from './Desenvolvimento.jsx';

/*
import Painel from './Painel.jsx';
import Modal from './Modal.jsx';
*/



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
