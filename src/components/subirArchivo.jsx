/* eslint-disable no-unused-vars */
import { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import BhpHeader from '../components/jsx/bhp-header';
import { transformarTxtVisualizacion } from '../utils/transformarTxtVisualizacion';
import { Link } from 'react-router-dom';
import { generarEstructuraAdministrador } from '../utils/generarEstructuraAdministrador';
import image from "../assets/imgUpload.png";
import EastIcon from '@mui/icons-material/East';
import Alert from '@mui/material/Alert';





function SubirArchivo() {
  const [archivoSeleccionado, setArchivoSeleccionado] = useState(null);
  const [contenidoArchivo, setContenidoArchivo] = useState("");
  const [datosTransformados, setDatosTransformados] = useState([]);
  const [archivoSubido, setArchivoSubido] = useState(false); // Nuevo estado para controlar si el archivo se ha subido correctamente
  const [alertaVisible, setAlertaVisible] = useState(false); // Estado para controlar si la alerta está visible
  const [fechaActualizacion, setFechaActualizacion] = useState("");
  const [horaActualizacion, setHoraActualizacion] = useState("");

  useEffect(() => {
    // Recuperar la fecha y hora de la última actualización al cargar el componente
    const fecha = localStorage.getItem('fecha');
    const hora = localStorage.getItem('hora');
    if (fecha && hora) {
      setFechaActualizacion(fecha);
      setHoraActualizacion(hora);
    }
  }, []);

  const manejarEliminacionArchivo = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setArchivoSeleccionado(null);
    setContenidoArchivo("");
    setDatosTransformados([]);
    // actualizarDatos([]);
    setAlertaVisible(false); // Ocultar la alerta al eliminar el archivo

  };



  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    setArchivoSeleccionado(file);
    const reader = new FileReader();

    reader.onload = (e) => {
      const contenido = e.target.result;
      setContenidoArchivo(contenido); // Guarda el contenido completo para la vista previa
      const jsonData = transformarTxtVisualizacion(contenido); // Transforma el contenido a JSON para visualizarlo en el navegador
      setDatosTransformados(jsonData);
      // console.log(jsonData);
      // actualizarDatos(jsonData);
      // Procesa y prepara los datos para VistaAdministrador
      const datosParaAdmin = generarEstructuraAdministrador(contenido);
      localStorage.setItem('datosParaAdmin', JSON.stringify(datosParaAdmin));

      setArchivoSubido(true); // Establecer el estado de archivoSubido a true después de que se haya cargado el archivo correctamente
      setAlertaVisible(true); // Mostrar la alerta cuando se carga correctamente el archivo

    };

    reader.readAsText(file, 'UTF-8');
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });



  return (
    <div>

      <BhpHeader fecha={fechaActualizacion} hora={horaActualizacion} />
      {/* </header> */}

      <h1 className='title'>Asignación de Operadores</h1>

      <main className='box1'>
        <section {...getRootProps()} className='drag' style={{ border: '2px dashed black', padding: '20px', textAlign: 'center' }}>
          <img src={image} alt='Upload' className='imgUpload' />
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p className='textDrag'>Suelta el archivo aquí...</p> :
              <p className='textDrag'>Arrastra un archivo aquí, o haz clic para seleccionar un archivo</p>
          }
          <article className='btnDrag'>
            <button className='btnDelete' onClick={manejarEliminacionArchivo}>Eliminar Archivo</button>

          </article>
        </section>
        {alertaVisible && <Alert variant="filled" severity="success" onClose={() => setAlertaVisible(false)}>
          El archivo se subió correctamente.
        </Alert>}
        <Link to="/vistaAdministrador" ><button className='btnContinuar'>Continuar <EastIcon fontSize="large" style={{ align: 'center', verticalAlign: 'middle' }} /> </button></Link>
      </main>

      {contenidoArchivo && (
        <>
          <h2 style={{ textAlign: "center", fontSize: "32px" }}>Vista previa del archivo completo:</h2>
          <pre style={{ whiteSpace: "pre-wrap", textAlign: "center", fontSize: "24px", margin: "0 auto" }}>
            {contenidoArchivo}
          </pre>
        </>
      )}
    </div>
  );
}

export default SubirArchivo;
