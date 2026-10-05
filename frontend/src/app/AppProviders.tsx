import React from "react";
import { Provider } from "react-redux";
import { store } from '@/app/store';
import { AlertProvider } from "@/components/modals/alert/AlertProvider.tsx";
import { BrowserRouter} from 'react-router-dom';
import ConfirmProvider from "@/components/modals/confirm/ConfirmProvider.tsx";
import {CmmnCodeProvider} from "@/common/codes/CmmnCodeProvider.tsx";
/**
 * APP Provider 옵션
 */
type AppProviderProps = {
  children: React.ReactNode;
}
/**
 * APP에 있는 모든 Provider 정보 관리
 * @param children
 * @constructor
 */
export default function AppProviders({ children }: AppProviderProps) {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AlertProvider>
            <ConfirmProvider>
              <CmmnCodeProvider>
                {children}
              </CmmnCodeProvider>
            </ConfirmProvider>
          </AlertProvider>
        </BrowserRouter>
      </Provider>
    );
}