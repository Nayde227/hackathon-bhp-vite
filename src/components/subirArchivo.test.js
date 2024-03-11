import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubirArchivo from './subirArchivo';
import { MemoryRouter } from 'react-router-dom';

describe('SubirArchivo', () => {
  test('se renderiza y muestra el título correcto', () => {
    render(
      <MemoryRouter>
        <SubirArchivo />
      </MemoryRouter>
    );
    expect(screen.getByText('Asignación de Operadores')).toBeInTheDocument();
  });

  test('muestra el mensaje correcto cuando no hay archivo seleccionado', () => {
    render(
      <MemoryRouter>
        <SubirArchivo />
      </MemoryRouter>
    );
    expect(screen.getByText('Arrastra un archivo aquí, o haz clic para seleccionar un archivo')).toBeInTheDocument();
  });
});

test('verifica que el botón de continuar tiene el texto correcto', () => {
  render(
    <MemoryRouter>
      <SubirArchivo />
    </MemoryRouter>
  );

  expect(screen.getByText('Continuar')).toBeInTheDocument();
});
