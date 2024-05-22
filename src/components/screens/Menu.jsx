// Menu.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Menu.css';

function Menu() {
  const componentes = [
    {
        id: 1,
        title: 'Painel',
        description: 'Painel de Controle',
        image: './src/assets/icones/Icone_Painel.svg',
        link: '/painel',
    },
    {
        id: 2,
        title: 'Colaboradores',
        description: 'Painel de Colaboradores',
        image: './src/assets/icones/Icone_Colaboradores.svg',
        link: '/',
    },
    {
        id: 3,
        title: 'Criar Formulário',
        description: 'Criação de Formulários',
        image: './src/assets/icones/Icone_Formulario.svg',
        link: '/desenvolvimento',
    },
    {
        id: 4,
        title: 'Criar Evento',
        description: 'Criação de Eventos',
        image: './src/assets/icones/Icone_Evento.svg',
        link: '/desenvolvimento',
    },
    {
        id: 5,
        title: 'Central',
        description: 'Central de Atendimento',
        image: './src/assets/icones/Icone_Central.svg',
        link: '/desenvolvimento',
    },
  ];

  const sair = {
    id: 6,
    title: 'Sair',
    description: 'Sair do Sistema',
    image: './src/assets/icones/Icone_Sair.svg',
    link: '/login',
  };

  return (
    <nav className="MenuLateral">
        <div className="Logo">
        <Link to="/"><img  src="src/assets/icones/Logo_Branco.svg" alt="Logo BK"/></Link>
        </div>
        <div className="Componentes">
            <ul className="Funcoes"> 
                {componentes.map(item => (
                    <li key={item.id}>
                        <img src={item.image} alt={item.description} />
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className="Sair">
            <div className="Linha">
                <img src={sair.image} alt={sair.description}/>
                <Link to={sair.link}>{sair.title}</Link>
            </div>
        </div>
    </nav>
  );
}

export default Menu;
