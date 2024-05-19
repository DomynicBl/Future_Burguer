import React, { useState } from 'react';

function Search({ colaboradores }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const filterColaboradores = (colaborador) => {
    if (
      colaborador.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      colaborador.turno.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    }

    if (filterOption === 'All') {
      return true;
    } else if (filterOption === 'Gerência' && colaborador.cargo === 'Gerente Drive Thru') {
      return true;
    } else if (filterOption === 'Operacional' && colaborador.cargo !== 'Gerente Drive Thru') {
      return true;
    } else if (filterOption === 'Manhã' && colaborador.turno === 'Manhã') {
      return true;
    } else if (filterOption === 'Noite' && colaborador.turno === 'Noite') {
      return true;
    }

    return false;
  };

  const filteredColaboradores = colaboradores.filter(filterColaboradores);

  return (
    <div className="Pesquisa_Colaboradores">
      <input
        type="text"
        placeholder="Pesquise por nome, cargo ou turno"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select value={filterOption} onChange={handleFilterChange}>
        <option value="All">Todos</option>
        <option value="Gerência">Cargo: Gerência</option>
        <option value="Operacional">Cargo: Operacional</option>
        <option value="Manhã">Turno: Manhã</option>
        <option value="Noite">Turno: Noite</option>
      </select>
      <ul className="Card_Colaboradores">
        {filteredColaboradores.length === 0 ? (
          <li>Nenhum colaborador correspondente encontrado.</li>
        ) : (
          filteredColaboradores.map((colaborador) => (
            <li key={colaborador.id}>
              <div className="Foto_colaborador">
                <img src={colaborador.image} alt={colaborador.description} />
              </div>
              <div className="Perfil_Colaborador">
                <p className="Nome_Colaborador">{colaborador.name}</p>
                <div className="infos">
                  <img src="../src/assets/Icones/Icone_Turno.svg" alt="Turno" />
                  <p>{colaborador.turno}</p>
                </div>
                <div className="infos">
                  <img src="../src/assets/Icones/Icone_Cargo.svg" alt="Cargo" />
                  <p>{colaborador.cargo}</p>
                </div>
              </div>
              <div className="Mais_Infos">
                <button className="Botao_Modal">+</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Search;
