import React, { useState, useEffect } from 'react';
import '../Styles/Painel.css';
import Pesquisa from '../screens/Pesquisa.jsx';

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
      tarefas_total: '1200',
      tarefas_feitas: '950',
      conquistas: '300',
      inicio: '01/02/2021',
      final: '01/02/2022',
    },
    {
      id: 2,
      name: 'Tiffany Kanesiro',
      turno: 'Noite',
      cargo: 'Atendente',
      image: '../src/assets/Colaboradores/Tiffany_Kanesiro.svg',
      tarefas_total: '1100',
      tarefas_feitas: '870',
      conquistas: '280',
      inicio: '05/01/2021',
      final: '05/01/2022',
    },
    {
      id: 3,
      name: 'Nicolas Fresch',
      turno: 'Manhã',
      cargo: 'Sub gerente',
      image: '../src/assets/Colaboradores/Nicolas_Fresch.svg',
      tarefas_total: '1350',
      tarefas_feitas: '1020',
      conquistas: '330',
      inicio: '03/03/2021',
      final: '03/03/2022',
    },
    {
      id: 4,
      name: 'Same Pinho',
      turno: 'Noite',
      cargo: 'Atendente',
      image: '../src/assets/Colaboradores/Same_Pinho.svg',
      tarefas_total: '980',
      tarefas_feitas: '740',
      conquistas: '240',
      inicio: '07/04/2021',
      final: '07/04/2022',
    },
    {
      id: 5,
      name: 'Otavio Baesse',
      turno: 'Noite',
      cargo: 'Atendente',
      image: '../src/assets/Colaboradores/Otavio_Baesse.svg',
      tarefas_total: '1150',
      tarefas_feitas: '890',
      conquistas: '260',
      inicio: '09/05/2021',
      final: '09/05/2022',
    },
    {
      id: 6,
      name: 'Lucas Kaminaga',
      turno: 'Noite',
      cargo: 'Chapeiro',
      image: '../src/assets/Colaboradores/Lucas_Kaminaga.svg',
      tarefas_total: '1300',
      tarefas_feitas: '980',
      conquistas: '320',
      inicio: '11/06/2021',
      final: '11/06/2022',
    },
    {
      id: 7,
      name: 'Milena Louzada',
      turno: 'Noite',
      cargo: 'Atendente',
      image: '../src/assets/Colaboradores/Milena_Louzada.svg',
      tarefas_total: '1050',
      tarefas_feitas: '810',
      conquistas: '270',
      inicio: '13/07/2021',
      final: '13/07/2022',
    },
    {
      id: 8,
      name: 'Alice Munhoz',
      turno: 'Noite',
      cargo: 'Atendente',
      image: '../src/assets/Colaboradores/Alice_Munhoz.svg',
      tarefas_total: '1250',
      tarefas_feitas: '940',
      conquistas: '310',
      inicio: '15/08/2021',
      final: '15/08/2022',
    },
    {
      id: 9,
      name: 'Kim Tomada',
      turno: 'Noite',
      cargo: 'Instrutor',
      image: '../src/assets/Colaboradores/Kim_Tomada.svg',
      tarefas_total: '1400',
      tarefas_feitas: '1050',
      conquistas: '350',
      inicio: '17/09/2021',
      final: '17/09/2022',
    },
  ];

  useEffect(() => {
    setFilteredColaboradores(colaboradores);
  }, []);

  return (
    <div className="Gerenciamento">
      <div className="fixer">
        <div className="Header">
          <h1>Painel</h1>
          <div className="Perfil_Gerente">
            <h2>Gerente</h2>
            <img src="../src/assets/Colaboradores/Gerente.svg" alt="Perfil"/>
          </div>
        </div>
        <Pesquisa colaboradores={colaboradores} setFilteredColaboradores={setFilteredColaboradores} />
      </div>

      <div className="Painel">
        <div className="Lista_Colaboradores">
            <div className='Titulo_Painel'>
                <h1>Tarefas realizadas na semana</h1>
            </div>
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
                      <p>78% das tarefas</p>
                      <div className='Barra_Progresso'/>
                        <div></div>
                      </div>
                    </div>
                </li>
                ))
            ) : (
                <li>Nenhum colaborador encontrado.</li>
            )}
            </ul>
        </div>
        <div className="Dashboard">
          <div className="Desempenho_Colaborador">
            <div className="Grafico">
              <h1>Desempenho</h1>
              <div className="Grafico_Pizza"/>
              <div className="legenda">
                <div className="desempenho_abaixo">
                  <div className="texto">
                    <div className="referencia"/>
                    <h2>Abaixo do esperado</h2>
                  </div>
                  <p>5%</p>
                </div>
                <div className="desempenho_medio">
                  <div className="texto">
                    <div className="referencia"/>
                    <h2>Na média</h2>
                  </div>
                  <p>22%</p>
                </div>
                <div className="desempenho_acima">
                  <div className="texto">
                    <div className="referencia"/>
                    <h2>Superou expectativas</h2>
                  </div>
                  <p>35%</p>
                </div>
              </div>
            </div>
            <div className="Rank_Colaboradores">
              <h1>Colaboradores destaque</h1>
              <div className="destaques">
                <h2>Nome</h2>
                <p>⭐ Lucas Kaminaga</p>
                <p>⭐ test</p>
                <p>⭐ test</p>
                <p>⭐ test</p>
                <p>⭐ test</p>
              </div>
              <div className="conquistas">
                <h2>Conquistas</h2>
                <p>275</p>
                <p>test2</p>
                <p>test2</p>
                <p>test2</p>
                <p>test2</p>
              </div>
              <div className="periodo">
                <h2>Período</h2>
                <p>01/05 - 02/10</p>
                <p>test3</p>
                <p>test3</p>
                <p>test3</p>
                <p>test3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colaboradores;
