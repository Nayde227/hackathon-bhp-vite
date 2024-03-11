import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SubirArchivo from './components/subirArchivo';
import VistaAdministrador from './components/vistaAdministrador'
import CardGrid from './components/jsx/card-grid';
import BasicForm from './Login';

function App() {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<BasicForm />} />
        <Route path="/subirArchivo" element={<SubirArchivo />} />
        <Route path="/vistaAdministrador" element={<VistaAdministrador />} />
        <Route path="/vistaOperarios" element={<CardGrid />} />
      </Routes>
    </Router >
  );

}

export default App;


