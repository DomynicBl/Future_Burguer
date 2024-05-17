// Colaboradores.jsx
import '../elements/Input/Input_Search.jsx';
import '../Styles/Colaboradores.css';
import React from 'react';
import { useState } from 'react';


function Colaboradores() {
  const colaboradores = [
    {
        id: 1,
        name: 'Gabriel Caique',
        turno: 'Noite',
        cargo: 'Gerente Drive Thru',
        image: '../src/assets/Colaboradores/Gabriel_Caique.svg',
    },
    {
        id: 2,
        name: 'Tiffany Kanesiro',
        turno: 'Noite',
        cargo: 'Atendente',
        image: '../src/assets/Colaboradores/Tiffany_Kanesiro.svg',
    },
    {
        id: 3,
        name: 'Nicolas Fresch',
        turno: 'Noite',
        cargo: 'Sub gerente',
        image: '../src/assets/Colaboradores/Nicolas_Fresch.svg',
    },
    {
        id: 4,
        name: 'Same Pinho',
        turno: 'Noite',
        cargo: 'Atendente',
        image: '../src/assets/Colaboradores/Same_Pinho.svg',
    },
    {
        id: 5,
        name: 'Otavio Baesse',
        turno: 'Noite',
        cargo: 'Atendente',
        image: '../src/assets/Colaboradores/Otavio_Baesse.svg',
    },
    {
        id: 1,
        name: 'Gabriel Caique',
        turno: 'Noite',
        cargo: 'Gerente Drive Thru',
        image: '../src/assets/Colaboradores/Gabriel_Caique.svg',
    },
    {
        id: 2,
        name: 'Tiffany Kanesiro',
        turno: 'Noite',
        cargo: 'Atendente',
        image: '../src/assets/Colaboradores/Tiffany_Kanesiro.svg',
    },
    {
        id: 3,
        name: 'Nicolas Fresch',
        turno: 'Noite',
        cargo: 'Sub gerente',
        image: '../src/assets/Colaboradores/Nicolas_Fresch.svg',
    },
    {
        id: 4,
        name: 'Same Pinho',
        turno: 'Noite',
        cargo: 'Atendente',
        image: '../src/assets/Colaboradores/Same_Pinho.svg',
    },
    {
        id: 5,
        name: 'Otavio Baesse',
        turno: 'Noite',
        cargo: 'Atendente',
        image: '../src/assets/Colaboradores/Otavio_Baesse.svg',
    },
  ];


  return (
    <div className="Gerenciamento">
        <div className="fixer">
            <div className="Header">
                <h1>Colaboradores</h1>
                <div className="Perfil_Gerente">
                    <h2>Gerente</h2>
                    <img src="../src/assets/Colaboradores/Gerente.svg" alt="Perfil"/>
                </div>
            </div>
            <div className="Pesquisa_Colaboradores">
                <input type="text" placeholder="Pesquise por nome, cargo ou turno"/>
                <select placeholder="test">
                    <option value="" disabled selected>Filtrar por:</option>
                    <option value="All">Todos</option>
                    <option value="Completed">Alfabética: A {">"} Z</option>
                    <option value="Completed">Alfabética: Z {">"} A</option>
                    <option value="Completed">Turno: Manhã</option>
                    <option value="Completed">Turno: Noite</option>
                    <option value="Completed">Cargo: Gerência</option>
                    <option value="Completed">Cargo: Operacional</option>
                </select>
            </div>
        </div>

        <div className="Colaboradores">
            <ul className="Card_Colaboradores"> 
                {colaboradores.map(item => (
                    <li key={item.id}>
                        <div className="Foto_colaborador">
                            <img src={item.image} alt={item.description}/>
                        </div>
                        <div className="Perfil_Colaborador">
                            <p className="Nome_Colaborador">{item.name}</p>
                            <div className="infos">
                                <img src="../src/assets/Icones/Icone_Turno.svg"></img> 
                                <p>{item.turno}</p>
                            </div>
                            <div className="infos">
                                <img src="../src/assets/Icones/Icone_Cargo.svg"></img> 
                                <p>{item.cargo}</p>
                            </div>
                        </div>
                        <div className="Mais_Infos">
                            <button className='Botao_Modal'>
                                +
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default Colaboradores;