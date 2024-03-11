export const generarEstructuraAdministrador = (contenidoTxt) => {
  const lineas = contenidoTxt.split('\n').filter(linea => linea.trim() !== '' && !linea.includes('Oper Alineado'));

  // Omite las primeras 4 líneas y otras líneas específicas
  const lineasRelevantes = lineas.slice(4).filter((_, index) => ![16, 17, 33, 34].includes(index + 4));
  const datosParaAdmin = lineasRelevantes.map((linea, index) => {
    const operAlineado = linea.substring(9, 27).trim();
    const ubicacion = linea.substring(98, 113).trim();
    let bus = linea.substring(114, 121).trim();
    // console.log(`Línea ${index + 5}:`, linea); // +5 porque se omite las primeras 4 líneas y se comienza a contar desde 1
    // console.log('OperAlineado:', operAlineado, 'Ubicacion:', ubicacion, 'Bus:', bus);

    // Verifica y ajusta el valor de bus si es necesario
    if (!bus.startsWith("BUS") || bus === "") {
      bus = 'N/A'; // Ajusta según sea necesario
    }

    // console.log(`Línea ${index + 5}:`, linea);
    // console.log('OperAlineado:', operAlineado, 'Ubicacion:', ubicacion, 'Bus:', bus);

    // Retorna un objeto que representa esta línea
    return {
      operAlineado,
      ubicacion,
      bus,
    };
  });

  return datosParaAdmin;
};
