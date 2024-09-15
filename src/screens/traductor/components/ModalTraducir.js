// src/components/ModalTraducir.jsx
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Modal.css'; // Importa los estilos de los modales

export const ModalTraducir = ({ onClose }) => {
  const [palabra, setPalabra] = useState('');
  const [idioma, setIdioma] = useState('es');
  const [traduccion, setTraduccion] = useState('');
  const dictionary = useSelector((state) => state.dictionary.words);

  useEffect(() => {
    setPalabra('');
    setIdioma('es');
    setTraduccion('');
  }, [onClose]);

  const handleTraducir = () => {
    const foundWord = dictionary.find(
      (w) => w.es === palabra || w.en === palabra || w.pt === palabra
    );
    
    if (foundWord) {
      setTraduccion(foundWord[idioma]);
    } else {
      setTraduccion('No existe en mi base de datos la palabra a traducir.');
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Traductor USIP</h2>
        <label>Palabra a traducir</label>
        <input 
          value={palabra} 
          onChange={(e) => setPalabra(e.target.value)} 
        />
        <label>Idioma de traducción</label>
        <select value={idioma} onChange={(e) => setIdioma(e.target.value)}>
          <option value="es">Español</option>
          <option value="en">Inglés</option>
          <option value="pt">Portugués</option>
        </select>
        <button onClick={handleTraducir}>Traducir</button>
        <textarea value={traduccion} readOnly />
        <button className="close-btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};
export default ModalTraducir;
