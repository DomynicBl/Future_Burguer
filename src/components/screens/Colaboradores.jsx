// Colaboradores.jsx
import React, { useState, useEffect } from 'react';
import Modal from '../features/Modal.jsx';
import '../Styles/Colaboradores.css';
import Pesquisa from '../screens/Pesquisa.jsx'; // Altere a importação

function Colaboradores() {
  const [open, setOpen] = useState(false);
  const [selectedColaborador, setSelectedColaborador] = useState(null);
  const [filteredColaboradores, setFilteredColaboradores] = useState([]);

  const colaboradores = [
    {
      id: 1,
      name: 'Gabriel Caique',
      turno: 'Noite',
      cargo: 'Gerente Drive Thru',
      image: '../src/assets/Colaboradores/Gabriel_Caique.svg',
      Hobie: 'Estudar Inglês',
      Sonho: 'Fazer um intercâmbio',
      Motivação_Pessoal: 'Familia',
      Referencia_Pessoal: 'Avô Paterno',
      Ajuda_Bk: 'Contribuindo com algo que possa elevar sua carreira',
      Area_Interesse: 'Relações Comerciais',
      Obj_Empresa: 'Trazer resultados positivos',
      Pnt_Forte: 'Resiliência, empatia e determinação',
      Habili_Desejada: 'Comunicação persuasiva, poliglotismo',
      Suporte_Desejado: 'Motivasão da equipe, colaboração e oportunidades',
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
      turno: 'Manhã',
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
      id: 6,
      name: 'Lucas Kaminaga',
      turno: 'Noite',
      cargo: 'Chapeiro',
      image: '../src/assets/Colaboradores/Lucas_Kaminaga.svg',
    },
    {
      id: 7,
      name: 'Milena Louzada',
      turno: 'Noite',
      cargo: 'Atendente',
      image: '../src/assets/Colaboradores/Milena_Louzada.svg',
    },
    {
      id: 8,
      name: 'Alice Munhoz',
      turno: 'Noite',
      cargo: 'Atendente',
      image: '../src/assets/Colaboradores/Alice_Munhoz.svg',
    },
    {
      id: 9,
      name: 'Kim Tomada',
      turno: 'Noite',
      cargo: 'Instrutor',
      image: '../src/assets/Colaboradores/Kim_Tomada.svg',
    },
  ];

  useEffect(() => {
    setFilteredColaboradores(colaboradores);
  }, []);

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
        <Pesquisa colaboradores={colaboradores} setFilteredColaboradores={setFilteredColaboradores} /> {/* Altere a chamada */}
      </div>

      <div className="Colaboradores">
        <ul className="Card_Colaboradores"> 
          {filteredColaboradores.length > 0 ? (
            filteredColaboradores.map(item => (
              <li key={item.id}>
                <div className="Foto_colaborador">
                  <img src={item.image} alt={item.description}/>
                </div>
                <div className="Perfil_Colaborador">
                  <p className="Nome_Colaborador">{item.name}</p>
                  <div className="infos">
                    <img src="../src/assets/Icones/Icone_Turno.svg" alt="Turno"/>
                    <p>{item.turno}</p>
                  </div>
                  <div className="infos">
                    <img src="../src/assets/Icones/Icone_Cargo.svg" alt="Cargo"/>
                    <p>{item.cargo}</p>
                  </div>
                </div>
                <div className="Mais_Infos">
                  <button className='Botao_ModalOpen' onClick={() => { setOpen(true); setSelectedColaborador(item); }}>
                    +
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li>Nenhum colaborador encontrado.</li>
          )}
        </ul>
      </div>
      {selectedColaborador && (
        <Modal isOpen={open} setOpen={setOpen} colaborador={selectedColaborador} />
      )}
    </div>
  );
}

export default Colaboradores;