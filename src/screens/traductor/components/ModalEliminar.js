// src/components/ModalEliminar.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWord } from '../../../redux/dictionarySlice';
import './Modal.css'; // Importa los estilos de los modales

export const ModalEliminar = ({ onClose }) => {
  const [palabra, setPalabra] = useState('');
  const [mensaje, setMensaje] = useState('');
  const dispatch = useDispatch();
  const dictionary = useSelector((state) => state.dictionary.words);

  useEffect(() => {
    setPalabra('');
    setMensaje('');
  }, [onClose]);

  const handleEliminar = () => {
    const foundWord = dictionary.find(
      (w) => w.es === palabra || w.en === palabra || w.pt === palabra
    );
    
    if (foundWord) {
      dispatch(removeWord(palabra));
      setMensaje('Palabra eliminada correctamente.');
    } else {
      setMensaje('No existe esa palabra en mi base de datos.');
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Traductor USIP</h2>
        <p>¿Qué palabra desea eliminar del diccionario? Puede escribir su palabra en español, inglés o portugués</p>
        <label>Palabra</label>
        <input 
          value={palabra} 
          onChange={(e) => setPalabra(e.target.value)} 
        />
        <button onClick={handleEliminar}>Eliminar</button>
        <button className="close-btn" onClick={onClose}>Cerrar</button>
        {mensaje && <p>{mensaje}</p>}
      </div>
    </div>
  );
};
export default ModalEliminar;