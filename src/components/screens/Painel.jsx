import React, { useState, useEffect } from 'react';
import chroma from 'chroma-js';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
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
      image: '../src/assets/colaboradores/Gabriel_Caique.svg',
      tarefas_total: '1200',
      tarefas_feitas: '1115',
      conquistas: '300',
      inicio: '02/21',
      final: '02/22',
    },
    {
      id: 2,
      name: 'Tiffany Kanesiro',
      turno: 'Noite',
      cargo: 'Atendente',
      image: '../src/assets/colaboradores/Tiffany_Kanesiro.svg',
      tarefas_total: '1100',
      tarefas_feitas: '600',
      conquistas: '280',
      inicio: '08/21',
      final: '03/22',
    },
    {
      id: 3,
      name: 'Nicolas Fresch',
      turno: 'Manhã',
      cargo: 'Sub gerente',
      image: '../src/assets/colaboradores/Nicolas_Fresch.svg',
      tarefas_total: '1350',
      tarefas_feitas: '1020',
      conquistas: '402',
      inicio: '03/21',
      final: '03/22',
    },
    {
      id: 4,
      name: 'Same Pinho',
      turno: 'Noite',
      cargo: 'Atendente',
      image: '../src/assets/colaboradores/Same_Pinho.svg',
      tarefas_total: '980',
      tarefas_feitas: '247',
      conquistas: '240',
      inicio: '04/22',
      final: '04/24',
    },
    {
      id: 5,
      name: 'Otavio Baesse',
      turno: 'Noite',
      cargo: 'Atendente',
      image: '../src/assets/colaboradores/Otavio_Baesse.svg',
      tarefas_total: '1150',
      tarefas_feitas: '890',
      conquistas: '260',
      inicio: '05/21',
      final: '05/23',
    },
    {
      id: 6,
      name: 'Lucas Kaminaga',
      turno: 'Noite',
      cargo: 'Chapeiro',
      image: '../src/assets/colaboradores/Lucas_Kaminaga.svg',
      tarefas_total: '1300',
      tarefas_feitas: '980',
      conquistas: '253',
      inicio: '06/20',
      final: '06/22',
    },
    {
      id: 7,
      name: 'Milena Louzada',
      turno: 'Noite',
      cargo: 'Atendente',
      image: '../src/assets/colaboradores/Milena_Louzada.svg',
      tarefas_total: '1050',
      tarefas_feitas: '810',
      conquistas: '270',
      inicio: '07/19',
      final: '07/22',
    },
    {
      id: 8,
      name: 'Alice Munhoz',
      turno: 'Noite',
      cargo: 'Atendente',
      image: '../src/assets/colaboradores/Alice_Munhoz.svg',
      tarefas_total: '1250',
      tarefas_feitas: '940',
      conquistas: '310',
      inicio: '08/19',
      final: '08/23',
    },
    {
      id: 9,
      name: 'Kim Tomada',
      turno: 'Noite',
      cargo: 'Instrutor',
      image: '../src/assets/colaboradores/Kim_Tomada.svg',
      tarefas_total: '1400',
      tarefas_feitas: '1400',
      conquistas: '664',
      inicio: '09/21',
      final: '09/24',
    },
  ];

  useEffect(() => {
    setFilteredColaboradores(colaboradores);
  }, []);

  const calcularPorcentagem = (feitas, total) => {
    return (feitas / total) * 100;
  };

  const getBarraCor = (porcentagem) => {
    return chroma.scale(['yellow', 'lightgreen', 'green'])(porcentagem / 100).hex();
  };

  const colaboradoresDestaque = colaboradores
    .sort((a, b) => b.conquistas - a.conquistas)
    .slice(0, 5);

  const categorias = {
    abaixo: 0,
    media: 0,
    acima: 0,
  };

  filteredColaboradores.forEach(colaborador => {
    const porcentagem = calcularPorcentagem(colaborador.tarefas_feitas, colaborador.tarefas_total);
    if (porcentagem < 60) {
      categorias.abaixo += 1;
    } else if (porcentagem < 75) {
      categorias.media += 1;
    } else {
      categorias.acima += 1;
    }
  });

  const data = [
    { name: 'Abaixo do esperado', value: categorias.abaixo },
    { name: 'Na média', value: categorias.media },
    { name: 'Superou expectativas', value: categorias.acima },
  ];

  const COLORS = ['#FF8042', '#FFBB28', '#00C49F'];

  return (
    <div className="Gerenciamento">
      <div className="fixer">
        <div className="Header">
          <h1>Painel</h1>
          <div className="Perfil_Gerente">
            <h2>Gerente</h2>
            <img src="../src/assets/colaboradores/Gerente.svg" alt="Perfil" />
          </div>
        </div>
        <Pesquisa colaboradores={colaboradores} setFilteredColaboradores={setFilteredColaboradores} />
      </div>

      <div className="Painel">
        <div className="Lista_Colaboradores2">
          <div className='Titulo_Painel'>
            <h1>Tarefas realizadas na semana</h1>
          </div>
          <ul className="Card_Colaboradores2">
            {filteredColaboradores.length > 0 ? (
              filteredColaboradores.map(item => {
                const porcentagem = calcularPorcentagem(item.tarefas_feitas, item.tarefas_total);
                const barraCor = getBarraCor(porcentagem);
                return (
                  <li key={item.id}>
                    <div className="Foto_colaborador">
                      <img src={item.image} alt={item.description} />
                    </div>
                    <div className="Perfil_Colaborador">
                      <p className="Nome_Colaborador">{item.name}</p>
                      <div className="infos2">
                        <p>{porcentagem.toFixed(2)}% das tarefas</p>
                        <div className='Barra_Progresso'>
                          <div style={{ width: `${porcentagem}%`, backgroundColor: barraCor }}></div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })
            ) : (
              <li>Nenhum colaborador encontrado.</li>
            )}
          </ul>
        </div>
        <div className="Dashboard">
          <div className="Desempenho_Colaborador">
            <div className="Grafico">
              <h1>Desempenho</h1>
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx={200}
                  cy={150}
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
              <div className="legenda">
                <div className="desempenho_abaixo">
                  <div className="texto">
                    <div className="referencia" />
                    <h2>Abaixo do esperado</h2>
                  </div>
                  <p>{(categorias.abaixo / filteredColaboradores.length * 100).toFixed(2)}%</p>
                </div>
                <div className="desempenho_medio">
                  <div className="texto">
                    <div className="referencia" />
                    <h2>Na média</h2>
                  </div>
                  <p>{(categorias.media / filteredColaboradores.length * 100).toFixed(2)}%</p>
                </div>
                <div className="desempenho_acima">
                  <div className="texto">
                    <div className="referencia" />
                    <h2>Superou expectativas</h2>
                  </div>
                  <p>{(categorias.acima / filteredColaboradores.length * 100).toFixed(2)}%</p>
                </div>
              </div>
            </div>
            <div className="Rank_Colaboradores">
              <h1>Colaboradores destaque</h1>
              <div className="destaques">
                <h2>Nome</h2>
                {colaboradoresDestaque.map(colab => (
                  <p key={colab.id}>⭐ {colab.name}</p>
                ))}
              </div>
              <div className="conquistas">
                <h2>Conquistas</h2>
                {colaboradoresDestaque.map(colab => (
                  <p key={colab.id}>{colab.conquistas}</p>
                ))}
              </div>
              <div className="periodo">
                <h2>Período</h2>
                {colaboradoresDestaque.map(colab => (
                  <p key={colab.id}>{colab.inicio} - {colab.final}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colaboradores;