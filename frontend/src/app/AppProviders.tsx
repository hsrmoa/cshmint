import React from "react";
import { Provider } from "react-redux";
import { store } from '@/app/store';
import { AlertProvider } from "@/components/modals/alert/AlertProvider.tsx";
import { BrowserRouter} from 'react-router-dom';
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
        <AlertProvider>
            <BrowserRouter>
              {children}
            </BrowserRouter>
        </AlertProvider>
      </Provider>
    );
}