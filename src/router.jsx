import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Login from './Login.jsx';
import Registrar from './Registrar';
import VistaLugar from './VistaLugar.jsx';
import ListaFavoritos from './ListaFavoritos.jsx';
import ListaLugarVisitado from './ListaLugarVisitado.jsx';
import Sugerencias from './Sugerencias.jsx';
import AgregarSitio from './AgregarSitio.jsx';
import PlacePage from './PlacePage.jsx';
import VistaBusqueda from './VistaBusqueda.jsx';
import RoutesPage from './RoutesPage.jsx';
import UploadRoute from './UploadRoute.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> },
  { path: '/registrar', element: <Registrar /> },
  { path: '/lugar', element: <VistaLugar /> },
  { path: '/sugerencias', element: <Sugerencias /> },
  { path: '/favoritos', element: <ListaFavoritos /> },
  { path: '/visitados', element: <ListaLugarVisitado /> },
  { path: '/agregar', element: <AgregarSitio /> },
  { path: '/place/:placeId', element: <PlacePage /> },
  { path: '/busqueda', element: <VistaBusqueda /> },
  { path: '/routes', element: <RoutesPage /> },
  { path: '/routes/upload', element: <UploadRoute /> },
]);

export default router;
