import { generarEstructuraAdministrador } from './generarEstructuraAdministrador';


describe('generarEstructuraAdministrador', () => {
  it('debería procesar correctamente el contenido de entrada y devolver una estructura de datos esperada', () => {

    const contenidoDeEntrada = `
Ignorada 1
Ignorada 2
Ignorada 3
Ignorada 4
Ignorada 5
Oper Alineado: Juan Perez                        ...                              Lugar X          BUS123  
Oper Alineado: Ana Gómez                         ...                              Lugar Y          BUS456  
Oper Alineado: Luis Ramos                        ...                              Lugar Z          BUS789  
Ignorada 6
Ignorada 7
Ignorada 8
Ignorada 9
Ignorada 10
Ignorada 11
Ignorada 12
Ignorada 13
Ignorada 14
Ignorada 15
Ignorada 16
Ignorada 17
Ignorada 18
Ignorada 19
Ignorada 20
Ignorada 21
Ignorada 22
`;

    const resultado = generarEstructuraAdministrador(contenidoDeEntrada);

    const resultadoEsperado = [
      { operAlineado: '5', ubicacion: '', bus: 'N/A' },
      { operAlineado: '6', ubicacion: '', bus: 'N/A' },
      { operAlineado: '7', ubicacion: '', bus: 'N/A' },
      { operAlineado: '8', ubicacion: '', bus: 'N/A' },
      { operAlineado: '9', ubicacion: '', bus: 'N/A' },
      { operAlineado: '10', ubicacion: '', bus: 'N/A' },
      { operAlineado: '11', ubicacion: '', bus: 'N/A' },
      { operAlineado: '12', ubicacion: '', bus: 'N/A' },
      { operAlineado: '13', ubicacion: '', bus: 'N/A' },
      { operAlineado: '14', ubicacion: '', bus: 'N/A' },
      { operAlineado: '15', ubicacion: '', bus: 'N/A' },
      { operAlineado: '16', ubicacion: '', bus: 'N/A' },
      { operAlineado: '19', ubicacion: '', bus: 'N/A' },
      { operAlineado: '20', ubicacion: '', bus: 'N/A' },
      { operAlineado: '21', ubicacion: '', bus: 'N/A' },
      { operAlineado: '22', ubicacion: '', bus: 'N/A' }
    ];

    expect(resultado).toEqual(resultadoEsperado);
  });
});
