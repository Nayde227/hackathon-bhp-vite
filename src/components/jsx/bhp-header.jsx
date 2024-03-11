import '../css/bhp-header.css';

function BhpHeader({ fecha, hora, mostrarMensaje }) {

  let mensajeActualizacion;

  if (!mostrarMensaje) {
    mensajeActualizacion = null; // No muestra el mensaje si mostrarMensaje es falso
  } else if (!fecha && !hora) {
    // Si no hay fecha ni hora
    mensajeActualizacion = <span><b>No hay actualización disponible</b></span>;
  } else {
    // Si hay fecha y/o hora
    mensajeActualizacion = (
      <>
        <span><b>Última actualización:</b></span>
        {fecha && <span> {fecha}</span>}
        {fecha && hora && <span> a las</span>}
        {hora && <span> {hora}</span>}
      </>
    );
  }

  return <header>
    <h1 id='logo'>BHP</h1>
    <p>{mensajeActualizacion}</p>
  </header>
}

export default BhpHeader;
