// src/routes/Home.jsx
import React, { useState } from 'react';
import { ModalAgregar } from './components/ModalAgregar';
import { ModalEliminar } from './components/ModalEliminar';
import { ModalTraducir } from './components/ModalTraducir';
import './components/Modal.css'


const Home = () => {
  const [modalAgregar, setModalAgregar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalTraducir, setModalTraducir] = useState(false);

  return (
    <div>
      <h1>Traductor USIP</h1>
      <button onClick={() => setModalAgregar(true)}>Agregar Palabra</button>
      <button onClick={() => setModalEliminar(true)}>Eliminar Palabra</button>
      <button onClick={() => setModalTraducir(true)}>Traducir</button>

      {modalAgregar && <ModalAgregar onClose={() => setModalAgregar(false)} />}
      {modalEliminar && <ModalEliminar onClose={() => setModalEliminar(false)} />}
      {modalTraducir && <ModalTraducir onClose={() => setModalTraducir(false)} />}
    </div>
  );
};

export default Home;
