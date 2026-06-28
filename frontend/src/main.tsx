import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App.tsx'
import './styles/globals.scss';
import AppProviders from "@/app/AppProviders.tsx";

/**
 *  Main 컴포넌트
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <AppProviders>
         <App />
      </AppProviders>
    </React.StrictMode>
)
