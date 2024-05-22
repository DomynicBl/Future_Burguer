import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pesquisa from './Pesquisa';

describe('Pesquisa Component', () => {
  it('deve renderizar corretamente', () => {
    const { getByPlaceholderText, getByText } = render(<Pesquisa colaboradores={[]} setFilteredColaboradores={() => {}} />);
    
    // Verifica se os elementos de entrada e seleção estão presentes
    expect(getByPlaceholderText('Pesquise por nome, cargo ou turno')).toBeInTheDocument();
    expect(getByText('Todos')).toBeInTheDocument();
    expect(getByText('Alfabética: A > Z')).toBeInTheDocument();
    expect(getByText('Alfabética: Z > A')).toBeInTheDocument();
    expect(getByText('Turno: Manhã')).toBeInTheDocument();
    expect(getByText('Turno: Noite')).toBeInTheDocument();
    expect(getByText('Cargo: Gerência')).toBeInTheDocument();
    expect(getByText('Cargo: Operacional')).toBeInTheDocument();
  });

  it('deve chamar a função de pesquisa ao digitar no campo de pesquisa', () => {
    const mockSetFilteredColaboradores = jest.fn();
    const { getByPlaceholderText } = render(<Pesquisa colaboradores={[]} setFilteredColaboradores={mockSetFilteredColaboradores} />);
    const input = getByPlaceholderText('Pesquise por nome, cargo ou turno');

    // Simula a entrada de texto no campo de pesquisa
    fireEvent.change(input, { target: { value: 'John' } });

    // Verifica se a função de filtragem foi chamada corretamente
    expect(mockSetFilteredColaboradores).toHaveBeenCalledWith(expect.any(Array));
  });

});
