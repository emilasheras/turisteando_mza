import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadRoute } from './services/routeService';
import './App.css';

export default function UploadRoute() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!name || !file) {
      setError('Falta nombre o archivo');
      return;
    }
    try {
      await uploadRoute({ name, description, gpxFile: file, activityType: 'hiking' });
      navigate('/routes');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-hader">
        <svg onClick={() => navigate('/routes')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="back-arrow" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg>
      </div>
      <h2 className="login-title">SUBIR RUTA</h2>
      <input className="login-input" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
      <textarea className="login-input" placeholder="Descripción" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="file" accept=".gpx" onChange={e => setFile(e.target.files[0])} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button className="login-button" onClick={handleSubmit}>Guardar</button>
    </div>
  );
}
