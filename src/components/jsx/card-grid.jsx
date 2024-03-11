import React, { useState, useEffect } from 'react';
import Card from './card';
import BhpHeader from './bhp-header';
import '../css/card-grid.css';

function CardGrid() {

  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [fechaActualizacion, setFechaActualizacion] = useState("");
  const [horaActualizacion, setHoraActualizacion] = useState("");

  useEffect(() => {
    // Esta función maneja el evento de cambio en localStorage
    const handleStorageChange = (event) => {
      if (event.key === 'fecha') {
        setFechaActualizacion(event.newValue);
      } else if (event.key === 'hora') {
        setHoraActualizacion(event.newValue);
      }
    };

    // Agregar el listener al evento storage
    window.addEventListener('storage', handleStorageChange);

    // Llamada inicial para establecer los valores por primera vez
    setFechaActualizacion(localStorage.getItem('fecha') || "");
    setHoraActualizacion(localStorage.getItem('hora') || "");

    // Limpieza: remover el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);


  useEffect(() => {
    const datosGuardados = localStorage.getItem('datosFiltradosParaAdmin');
    if (datosGuardados && JSON.parse(datosGuardados).length > 0) {
      const datos = JSON.parse(datosGuardados).filter(item => item.operAlineado !== "NINGUNA" && item.bus !== "N/A");
      datos.sort((a, b) => a.operAlineado.localeCompare(b.operAlineado));
      setDatosFiltrados(datos);
    } else {
      setMostrarModal(true); // Muestra el modal de forma permanente si no hay datos relevantes
    }
  }, []);

  useEffect(() => {
    const verificarDatos = () => {
      const datosGuardados = localStorage.getItem('datosFiltradosParaAdmin');
      if (!datosGuardados || JSON.parse(datosGuardados).length === 0) {
        setMostrarModal(true);
        setDatosFiltrados([]); // Limpia los datos filtrados ya que no hay datos
      } else {
        const nuevosDatos = JSON.parse(datosGuardados).filter(item => item.operAlineado !== "NINGUNA" && item.bus !== "N/A");
        nuevosDatos.sort((a, b) => a.operAlineado.localeCompare(b.operAlineado));

        // Comprobar si los datos realmente cambiaron antes de actualizar el estado
        if (JSON.stringify(nuevosDatos) !== JSON.stringify(datosFiltrados)) {
          setDatosFiltrados(nuevosDatos);
          setMostrarModal(false);
        }

      }
    };

    // Revisa si hay cambios (polling) cada determinados segundos segundos
    const intervalId = setInterval(verificarDatos, 1000); // Ajusta este tiempo según lo necesario

    // Llamada inicial para cargar datos sin esperar el primer intervalo
    verificarDatos();

    // Limpieza al desmontar el componente
    return () => clearInterval(intervalId);
  }, [datosFiltrados]);


  return (
    <main id="CardGrid">
      <BhpHeader fecha={fechaActualizacion} hora={horaActualizacion} mostrarMensaje={!mostrarModal} />
      {mostrarModal ? (
        <div className="modal-container" style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100 }}>
          <div className="modal-content" style={{ backgroundColor: 'white', padding: '20px',  borderRadius: '5px'}}>
            <p style={{ margin: '50px', fontWeight:'bold', color:'#DF5900'}}>No hay actualización disponible.</p>
          </div>
        </div>
      ) : (
        <ul id="operariosGrilla" className="scroll-container">
          {datosFiltrados.map((item) => (
            <Card key={item.id} operario={item} />
          ))}
        </ul>
      )}
    </main>
  );
}

export default CardGrid;
