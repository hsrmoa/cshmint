import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App.tsx'
import './styles/globals.scss';
import AppProviders from "@/app/AppProviders.tsx";
import GlobalAlertContainer from "@/pages/common/GlobalAlertContainer.tsx";

/**
 *  Main 컴포넌트
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <AppProviders>
         <App />
        {/* 화면 이동이나 loader redirect와 상관없이 전역에서 AlertModal을 띄워줌 */}
        <GlobalAlertContainer />
      </AppProviders>
    </React.StrictMode>
)
