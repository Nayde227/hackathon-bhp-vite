export const transformarTxtVisualizacion = (contenidoTxt) => {
  // Divide el contenido por líneas y elimina las que no son necesarias
  const lineas = contenidoTxt.split('\n').filter(linea => linea.trim() !== '' && !linea.includes('Oper Alineado'));

  // .slice(4) omite las primeras 4 líneas, empezando a procesar desde la quinta línea
  const lineasRelevantes = lineas.slice(4);
  // Inicializa los arreglos para cada campo
  const visualizacionJson = {
    operAlineado: [],
    ubicacion: [],
    bus: []
  };

  // Define los índices de las líneas a omitir 
  const lineasAOmitir = [12, 13, 29, 30];

  // Llena los arreglos con los datos de cada línea
  lineasRelevantes.forEach((linea, index) => {

    if (lineasAOmitir.includes(index)) return;

    // console.log('Línea procesada:', linea);

    const operAlineado = linea.substring(9, 16).trim();
    const ubicacion = linea.substring(98, 113).trim();
    let bus = linea.substring(114, 121).trim();
    // console.log('Oper Alineado:', operAlineado);
    // console.log('Ubicación:', ubicacion);
    // console.log('Bus antes de verificar:', bus);

    if (!bus.startsWith("BUS") || bus === "") {
      // console.log(`Valor de bus incorrecto o vacío, originalmente: '${bus}', se dejará en blanco.`);
      bus = 'N/A';
    }


    // console.log('Bus después de verificar:', bus);
    // console.log('Agregando a visualizacionJson - Oper Alineado:', operAlineado, 'Ubicación:', ubicacion, 'Bus:', bus);

    visualizacionJson.operAlineado.push(operAlineado);
    visualizacionJson.ubicacion.push(ubicacion);
    visualizacionJson.bus.push(bus);
  });

  return visualizacionJson;
};
