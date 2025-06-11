import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRoutes } from './services/routeService';
import './App.css';

export default function RoutesPage() {
  const navigate = useNavigate();
  const [routes, setRoutes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRoutes()
      .then(setRoutes)
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="login-container">
      <div className="login-hader">
        <svg onClick={() => navigate('/')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="back-arrow" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg>
      </div>
      <h2 className="login-title">RUTAS</h2>
      <button className="login-button" onClick={() => navigate('/routes/upload')}>Subir nueva ruta</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {routes.map(r => (
          <li key={r.id}>{r.name} - {(r.distance_m/1000).toFixed(2)} km</li>
        ))}
      </ul>
    </div>
  );
}
