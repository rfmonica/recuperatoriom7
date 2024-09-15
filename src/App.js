import './App.css';

import Navbar from "./components/Navbar";
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import { ModalAgregar } from './screens/traductor/components/ModalAgregar';
import { ModalEliminar } from './screens/traductor/components/ModalEliminar';
import { ModalTraducir } from './screens/traductor/components/ModalTraducir';
import './MainForm.css'; 




//function App() 
export const App = () => 
{
  const [showAgregar, setShowAgregar] = useState(false);
  const [showEliminar, setShowEliminar] = useState(false);
  const [showTraducir, setShowTraducir] = useState(false);

  return (
    <>
        <Navbar />
        <Outlet />
    
        <div className="main-container">
          <h1>Traductor USIP</h1>
          <p>Seleccione una acción para interactuar con el diccionario:</p>

          <button onClick={() => setShowAgregar(true)}>Agregar Palabra</button>
          <button className="delete-btn" onClick={() => setShowEliminar(true)}>Eliminar Palabra</button>
          <button className="translate-btn" onClick={() => setShowTraducir(true)}>Traducir</button>

          {showAgregar && <ModalAgregar onClose={() => setShowAgregar(false)} />}
          {showEliminar && <ModalEliminar onClose={() => setShowEliminar(false)} />}
           {showTraducir && <ModalTraducir onClose={() => setShowTraducir(false)} />}
     </div> 
  </>

  );
}

export default App;
