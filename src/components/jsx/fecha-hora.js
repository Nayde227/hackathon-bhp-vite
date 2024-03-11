 function fecha(){

    const fechaActual = new Date();
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const diaSemana = diasSemana[fechaActual.getDay()];
    const diaMes = fechaActual.getDate();
    const mes = meses[fechaActual.getMonth()];

    const fechaFormateada = `${diaSemana}, ${diaMes} de ${mes}`;

return fechaFormateada;
}

function hora(){
    const fechaActual = new Date();
    let hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    let periodo = "a.m." 

    if (hora >= 12){
        periodo = "p.m.";
        hora-=12;
    } 

    if (hora === 0) {
        hora = 12;
    }

    const minutosFormateados = String(minutos).padStart(2, '0');
    const horaFormateada = hora + ":" + minutosFormateados+ " ." + periodo;
    
    return horaFormateada
}

export { fecha, hora };
