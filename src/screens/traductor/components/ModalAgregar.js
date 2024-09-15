// src/components/ModalAgregar.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from '../../../redux/dictionarySlice.js';
import './Modal.css'; // Importa los estilos de los modales


export const ModalAgregar = ({ onClose }) => {
  const [espanol, setEspanol] = useState('');
  const [ingles, setIngles] = useState('');
  const [portugues, setPortugues] = useState('');
  const [mensaje, setMensaje] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setEspanol('');
    setIngles('');
    setPortugues('');
    setMensaje('');
  }, [onClose]);

  const handleAgregar = () => {
    if (espanol && ingles && portugues) {
      dispatch(addWord({ es: espanol, en: ingles, pt: portugues }));
      setMensaje('Palabra agregada correctamente.');
      setEspanol('');
      setIngles('');
      setPortugues('');
    } else {
      setMensaje('Por favor, rellene todos los campos.');
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Traductor USIP</h2>
        <label>Español</label>
        <input 
          value={espanol} 
          onChange={(e) => setEspanol(e.target.value)} 
        />
        <label>Inglés</label>
        <input 
          value={ingles} 
          onChange={(e) => setIngles(e.target.value)} 
        />
        <label>Portugués</label>
        <input 
          value={portugues} 
          onChange={(e) => setPortugues(e.target.value)} 
        />
        <button onClick={handleAgregar}>Agregar</button>
        <button className="close-btn" onClick={onClose}>Cerrar</button>
        {mensaje && <p>{mensaje}</p>}
      </div>
    </div>
  );
};
export default ModalAgregar;