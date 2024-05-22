import React from 'react';
import '../Styles/Modal.css';

export default function Modal({ isOpen, setOpen, colaborador }) {
  const handleClickOutside = (event) => {
    if (event.target.className === 'Modal') {
      setOpen(false);
    }
  };

  if (isOpen) {
    const getInfo = (info) => info || '-- Não Informado --';

    return (
      <div className='Modal' onClick={handleClickOutside}>
        <div className='Card_Modal'>
          <h1>Colaborador</h1>
          <div className='Card_colaborador'>
            <div className='Foto_colaborador'>
              <img src={colaborador.image} alt='Perfil' />
            </div>
            <div className='Perfil_Colaborador'>
              <p className='Nome_Colaborador'>{colaborador.name}</p>
              <div className='infos'>
                <img src='../src/assets/icones/Icone_Turno.svg' alt='Turno' />
                <p>{colaborador.turno}</p>
              </div>
              <div className='infos'>
                <img src='../src/assets/icones/Icone_Cargo.svg' alt='Cargo' />
                <p>{colaborador.cargo}</p>
              </div>
            </div>
          </div>
          <div className='Infos'>
            <div className='Infos_Colaborador'>
              <div className='col'>
                <h2>Gosta de Fazer</h2>
                <p>{getInfo(colaborador.Hobie)}</p>
                <h2>Sonho</h2>
                <p>{getInfo(colaborador.Sonho)}</p>
                <h2>Motivação Pessoal</h2>
                <p>{getInfo(colaborador.Motivação_Pessoal)}</p>
                <h2>Referência Pessoal</h2>
                <p>{getInfo(colaborador.Referencia_Pessoal)}</p>
                <h2>Como o BK pode ajudá-lo</h2>
                <p>{getInfo(colaborador.Ajuda_Bk)}</p>
              </div>
              <div className='col'>
                <h2>Área de Interesse</h2>
                <p>{getInfo(colaborador.Area_Interesse)}</p>
                <h2>Objetivos na Empresa</h2>
                <p>{getInfo(colaborador.Obj_Empresa)}</p>
                <h2>Pontos Fortes</h2>
                <p>{getInfo(colaborador.Pnt_Forte)}</p>
                <h2>Habilidades Desejadas</h2>
                <p>{getInfo(colaborador.Habili_Desejada)}</p>
                <h2>Quais Suportes Deseja</h2>
                <p>{getInfo(colaborador.Suporte_Desejado)}</p>
              </div>
            </div>
          </div>
          <div className='Div_ModalClose'>
            <button className='Botao_ModalClose' onClick={() => setOpen(false)}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
