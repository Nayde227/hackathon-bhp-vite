import { transformarTxtVisualizacion } from './transformarTxtVisualizacion';

describe('transformarTxtVisualizacion', () => {
  test('procesa correctamente el contenido de texto y devuelve una estructura de datos esperada', () => {

    const contenidoDePrueba = `
Ignorada 1
Ignorada 2
Ignorada 3
Ignorada 4
Oper Alineado: Juan Perez                        ...                              Lugar X          BUS123
Oper Alineado: Ana Gómez                         ...                              Lugar Y          BUS456
Oper Alineado: Luis Ramos                        ...                              Lugar Z          BUS789
Ignorada 5
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


    const resultadoEsperado = {
      operAlineado: ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '19', '20', '21', '22'],
      ubicacion: new Array(16).fill(''),
      bus: new Array(16).fill('N/A'),
    };

    const resultado = transformarTxtVisualizacion(contenidoDePrueba);

    expect(resultado).toEqual(resultadoEsperado);
  });
});

