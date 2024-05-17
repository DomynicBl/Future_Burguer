// Menu.jsx

import React from 'react';
import '../Styles/Menu.css';

function Menu() {
  const componentes = [
    {
        id: 1,
        title: 'Painel',
        description: 'Painel de Controle',
        image: './src/assets/Icones/Icone_Painel.svg',
        link: '#',
    },
    {
        id: 2,
        title: 'Colaboradores',
        description: 'Painel de Colaboradores',
        image: './src/assets/Icones/Icone_Colaboradores.svg',
        link: '#',
    },
    {
        id: 3,
        title: 'Criar Formulário',
        description: 'Criação de Formulários',
        image: './src/assets/Icones/Icone_Formulario.svg',
        link: '#',
    },
    {
        id: 4,
        title: 'Criar Evento',
        description: 'Criação de Eventos',
        image: './src/assets/Icones/Icone_Evento.svg',
        link: '#',
    },
    {
        id: 5,
        title: 'Central',
        description: 'Central de Atendimento',
        image: './src/assets/Icones/Icone_Central.svg',
        link: '#',
    },
  ];

  const sair = {
    id: 6,
    title: 'Sair',
    description: 'Sair do Sistema',
    image: './src/assets/Icones/Icone_Sair.svg',
    link: '#',
  };

  return (
    <nav className="MenuLateral">
        <div className="Logo">
            <img  src="src/assets/Icones/Logo_Branco.svg" alt="Logo BK"/>
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
                <a href={sair.link}>{sair.title}</a>
            </div>
        </div>
    </nav>
  );
}

export default Menu;
