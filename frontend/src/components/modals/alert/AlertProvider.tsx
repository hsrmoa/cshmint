import React from "react";
import {createContext, useState} from 'react';
import AlertModal from "@/components/modals/alert/AlertModal.tsx";
import type { AlertType } from "./alert.type.ts";''
/**
 * Alert 호출 시 Option Type 정보
 */
type AlertOption = {
  type? : AlertType;
  message: string;
  confirmText?: string;
}

/**
 * Alert Conntext에서 외부로 제공할 함수
 */
type AlertContextType = {
  onOpenAlert: (option: AlertOption) => void;
}

/**
 * ALert Context를 생성
 *
 * useAlert() Hook에서 해당 Context를 사용하여 Alert을 호출
 */
export const AlertContext = createContext<AlertContextType | null> (null);

/**
 * AlertProvider 하위에 포함될 컴포넌트
 */
type AlertProviderProps = {
  children: React.ReactNode;
}

/**
 *  공통 Alert Provider
 * @param children
 * @constructor
 */
export function AlertProvider({children}: AlertProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [option, setOption] = useState<AlertOption>({
    type: "info",
    message: "",
    confirmText: "확인"
  });

  /**
   * Alert Open 함수
   * @param option
   */
  const onOpenAlert = (option: AlertOption) => {
    setOption({
      type: option.type ?? "info",
      message: option.message,
      confirmText: option.confirmText ?? "확인"
    });
    setIsOpen(true);
  };
  /**
   *  화면 닫기
   */
  const onCloseAlert = () => {
    setIsOpen(false);
  }

  return (
    <AlertContext.Provider value={{onOpenAlert}}>
      {children}
      <AlertModal
        isOpen={isOpen}
        type={option.type}
        message={option.message}
        confirmText={option.confirmText}
        onConfirm={onCloseAlert}
      />
    </AlertContext.Provider>
  )
}