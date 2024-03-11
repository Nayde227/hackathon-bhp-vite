import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BhpHeader from './jsx/bhp-header';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fecha, hora } from './jsx/fecha-hora';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { TextField, TablePagination, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert, AlertTitle } from '@mui/material';





const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#0A6CB4',
    color: theme.palette.common.white,
    fontSize: 24,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 24,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableContainer = styled('div')({
  width: '1820px',
  margin: 'auto',
});



function VistaAdministrador() {

  const [page, setPage] = useState(0); // Estado para la página actual
  const [rowsPerPage, setRowsPerPage] = useState(15); // Estado para el número de filas por página
  const [datosParaAdmin, setDatosParaAdmin] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [fechaActual, setFechaActual] = useState(localStorage.getItem("fecha"));
  const [horaActual, setHoraActual] = useState(localStorage.getItem("hora"));
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mostrarEliminarAlerta, setMostrarEliminarAlerta] = useState(false);
  const [mostrarDialogo, setMostrarDialogo] = useState(false);


  const navigate = useNavigate()

  useEffect(() => {
    const datosGuardados = localStorage.getItem('datosParaAdmin');
    // console.log(datosGuardados);
    if (datosGuardados) {
      setDatosParaAdmin(JSON.parse(datosGuardados));
    }
  }, []);

  
  //Función para paginación
  const handleChangePage = (event, newPage) => { // Manejador de cambio de página
    setPage(newPage);
  };

  const [searchTerm, setSearchTerm] = useState('');

  // Función para manejar cambios en el término de búsqueda
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar datos según el término de búsqueda
  const filteredRows = datosParaAdmin.filter(row => {
    // Primero, filtrar las líneas que no queremos mostrar por defecto.
    if (row.operAlineado === "NINGUNA" && row.bus === "N/A") {
      return false; // No incluir estas líneas
    }

    // // Luego, si hay un término de búsqueda, aplicar ese filtro adicionalmente.
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();

      // Verifica si el término de búsqueda coincide con alguno de los campos.
      const matchOperario = row.operAlineado.toLowerCase().includes(searchTermLower);
      const matchBus = row.bus.toLowerCase().includes(searchTermLower);
      const matchDestino = row.ubicacion.toLowerCase().includes(searchTermLower);

      let matchAsignacion = false;
      if (searchTermLower === 'sí' || searchTermLower === 'si') {
        // Corrige la lógica para "Sí": ahora requiere que tanto operAlineado no sea "NINGUNA" Y bus no sea "N/A".
        matchAsignacion = (row.operAlineado !== "NINGUNA" && row.bus !== "N/A");
      } else if (searchTermLower === 'no') {
        matchAsignacion = (row.operAlineado === "NINGUNA" || row.bus === "N/A") && !(row.operAlineado === "NINGUNA" && row.bus === "N/A");
      }

      return matchOperario || matchBus || matchDestino || matchAsignacion;
    }

    // Si no hay término de búsqueda, incluir todos los objetos que no fueron excluidos inicialmente.
    return true;

  }).sort((a, b) => {
    // Ordenar primero por operAlineado siendo "NINGUNA", luego por bus siendo "N/A"
    if (a.operAlineado === "NINGUNA" && b.operAlineado !== "NINGUNA") {
      return -1; // 'a' va primero
    } else if (b.operAlineado === "NINGUNA" && a.operAlineado !== "NINGUNA") {
      return 1; // 'b' va primero
    } else if (a.bus === "N/A" && b.bus !== "N/A") {
      return -1; // dentro de los que no son "NINGUNA", 'a' va primero si su bus es "N/A"
    } else if (b.bus === "N/A" && a.bus !== "N/A") {
      return 1; // dentro de los que no son "NINGUNA", 'b' va primero si su bus es "N/A"
    }
    return 0; // Si ninguno de los criterios anteriores se cumple, mantener el orden actual
  });

  //Botón Eliminar y Alerta

  const handleCerrarEliminarAlerta = () => {
    setMostrarEliminarAlerta(false);
  };

  const borrarLocalStorage = () => {
    setMostrarEliminarAlerta(true);
  };

  const confirmarBorrarLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleCerrarAlerta = () => {
    setMostrarAlerta(false);
  };

  const handleMostrarDialogo = () => {
    const condicionModal = datosParaAdmin.some(row => row.operAlineado === "NINGUNA" || row.bus === "N/A");
    if (condicionModal) {
      setMostrarDialogo(true);
    }
  };

  const handleConfirmarPublicar = () => {
    // Suponiendo que 'filteredRows' contiene los datos que quieres guardar en el localStorage
    localStorage.setItem('datosFiltradosParaAdmin', JSON.stringify(filteredRows));

    // Actualiza la fecha y la hora de la última actualización
    const nuevaFechaActualizacion = fecha(); // Asume que esta función retorna la fecha actual
    const nuevaHoraActualizacion = hora(); // Asume que esta función retorna la hora actual

    localStorage.setItem("fecha", nuevaFechaActualizacion);
    localStorage.setItem("hora", nuevaHoraActualizacion);

    // Ahora actualiza el estado local para reflejar los cambios inmediatamente
    setFechaActual(nuevaFechaActualizacion);
    setHoraActual(nuevaHoraActualizacion);

    setMostrarDialogo(false);
    navigate("/vistaOperarios");

    // console.log(nuevaFechaActualizacion, nuevaHoraActualizacion);
  };

  const handleCancelarPublicar = () => {
    setMostrarDialogo(false);
  };


  return (
    <div>
      <BhpHeader fecha={fechaActual} hora={horaActual} />

      <h1 className='title'>Vista previa de Operadores</h1>

      <article className='input' >
        <TextField
          label='Buscar...'
          value={searchTerm}
          onChange={handleSearch}
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#F77F00', // Color del borde
              },
              '& input::placeholder': {
                color: '#F77F00', // Color del marcador de posición
              },
              width: '220px', // Ancho del campo de entrada
            },
          }}
        />
      </article>
      <StyledTableContainer>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ textAlign: 'center' }}>Operario</StyledTableCell>
                <StyledTableCell align="right" style={{ textAlign: 'center' }}>Bus</StyledTableCell>
                <StyledTableCell align="right" style={{ textAlign: 'center' }}>Ubicación</StyledTableCell>
                <StyledTableCell align="right" style={{ textAlign: 'center' }}>Asignación</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Solo muestra las filas correspondientes a la página actual */}
              {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" style={{ textAlign: 'center' }} scope="row">{row.operAlineado}</StyledTableCell>
                  <StyledTableCell align="right" style={{ textAlign: 'center' }}>{row.bus}</StyledTableCell>
                  <StyledTableCell align="right" style={{ textAlign: 'center' }}>{row.ubicacion}</StyledTableCell>
                  <StyledTableCell align="center" style={{ textAlign: 'center' }}>
                    {row.bus === 'N/A' || row.operAlineado === "NINGUNA" ?
                      <>
                        <span>No</span>
                        <CloseIcon style={{ color: 'red' }} />
                      </> :
                      <>
                        <span>Sí</span>
                        <CheckIcon style={{ color: 'green' }} />
                      </>
                    }</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination // Componente de paginación
          rowsPerPageOptions={[15, 20, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          }}
        />
      </StyledTableContainer>



      <section className='btnVistaA'>
        <Link to="/subirArchivo" ><button className='btnVolver'><WestIcon fontSize="large" style={{ align: 'center', verticalAlign: 'middle' }} /> Volver </button></Link>
        <button className='btnDelete' onClick={borrarLocalStorage}>Eliminar Archivo</button>
        {mostrarEliminarAlerta && (
          <Dialog
            open={mostrarEliminarAlerta}
            onClose={handleCerrarEliminarAlerta}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Confirmar eliminación"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                ¿Está seguro de que desea eliminar el archivo?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCerrarEliminarAlerta} variant='filled' color="error">
                Cancelar
              </Button>
              <Button onClick={confirmarBorrarLocalStorage} variant='outlined' color="error" autoFocus>
                Confirmar
              </Button>
            </DialogActions>
          </Dialog>
        )}
        {mostrarAlerta && (
          <Alert severity="error" onClose={handleCerrarAlerta}>
            <AlertTitle>Eliminando</AlertTitle>
            Archivo Eliminado
          </Alert>
        )}
        <button className='btnPublicar' onClick={handleMostrarDialogo}>Publicar<EastIcon style={{ align: 'center', verticalAlign: 'middle' }} fontSize="large" /></button>

        {/* Cuadro de diálogo */}
        <Dialog open={mostrarDialogo} onClose={handleCancelarPublicar}>
          <DialogTitle>Confirmar Publicación</DialogTitle>
          <DialogContent>
            Hay operadores sin asignar ¿Estás seguro de que deseas publicar?
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelarPublicar} variant='filled' >Cancelar</Button>
            <Button onClick={handleConfirmarPublicar} autoFocus sx={{ backgroundColor: '#F77F00', color: '#ffffff', '&:hover': {
      backgroundColor: '#814504'}, }} >Confirmar</Button>
          </DialogActions>
        </Dialog>
      </section>

    </div>
  );
}

export default VistaAdministrador;