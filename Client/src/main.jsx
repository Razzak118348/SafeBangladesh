import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes.jsx'; // rename Routes to AppRoutes
import ContextApi from './Context/ContextApi.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ContextApi children={ <RouterProvider router={Routes} />}></ContextApi>
  </StrictMode>,
);
