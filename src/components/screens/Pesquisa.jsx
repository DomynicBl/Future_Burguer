import React, { useState, useEffect } from 'react';
import '../Styles/Pesquisa.css';

function Pesquisa({ colaboradores, setFilteredColaboradores }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    applyFilters(searchTerm);
  }, [searchTerm, selectedFilter]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase().trim();
    setSearchTerm(term);
  };

  const applyFilters = (term) => {
    let filteredData = colaboradores;

    // Filtrar por termo de pesquisa
    if (term) {
      filteredData = colaboradores.filter(colaborador =>
        colaborador.name.toLowerCase().includes(term) ||
        colaborador.cargo.toLowerCase().includes(term) ||
        colaborador.turno.toLowerCase().includes(term)
      );
    }

    // Aplicar filtro selecionado
    switch (selectedFilter) {
      case 'A-Z':
        filteredData = filteredData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Z-A':
        filteredData = filteredData.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'Manhã':
        filteredData = filteredData.filter(colaborador => colaborador.turno === 'Manhã');
        break;
      case 'Noite':
        filteredData = filteredData.filter(colaborador => colaborador.turno === 'Noite');
        break;
      case 'Gerência':
        filteredData = filteredData.filter(colaborador => colaborador.cargo.toLowerCase().includes('gerente'));
        break;
      case 'Operacional':
        filteredData = filteredData.filter(colaborador => !colaborador.cargo.toLowerCase().includes('gerente'));
        break;
      default:
        break;
    }

    setFilteredColaboradores(filteredData);
  };

  const handleFilterChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedFilter(selectedOption);
  };

  return (
    <div className="Pesquisa_Colaboradores">
      <input
        type="text"
        placeholder="Pesquise por nome, cargo ou turno"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select value={selectedFilter} onChange={handleFilterChange}>
        <option value="All">Todos</option>
        <option value="A-Z">Alfabética: A {">"} Z</option>
        <option value="Z-A">Alfabética: Z {">"} A</option>
        <option value="Manhã">Turno: Manhã</option>
        <option value="Noite">Turno: Noite</option>
        <option value="Gerência">Cargo: Gerência</option>
        <option value="Operacional">Cargo: Operacional</option>
      </select>
    </div>
  );
}

export default Pesquisa;
