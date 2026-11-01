import React from "react";
import {createContext} from 'react';
import AlertModal from "@/components/modals/alert/AlertModal.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@/app/store.ts";
import {type AlertOption, closeAlert, onOpenAlert} from "@/features/alertSlice.ts";


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
  const dispatch = useDispatch();
  const { isOpen, alertOption } = useSelector((state:RootState) => state.alert);


  /**
   * Alert Open 함수
   * @param option
   */
  const onOpenAlertHandle = (option: AlertOption) => {
    dispatch(onOpenAlert({
      type: option.type ?? "info",
      message: option.message,
      confirmText: option.confirmText ?? "확인",
      onConfirm: option.onConfirm ?? null
    }));
  };
  /**
   *  화면 닫기
   */
  const onCloseAlertHandle = () => {
    alertOption?.onConfirm?.();
    dispatch(closeAlert());
  }

  return (
    <AlertContext.Provider value={{onOpenAlert: onOpenAlertHandle}}>
      {children}
      <AlertModal
        isOpen={isOpen}
        type={alertOption?.type}
        message={alertOption?.message?? ""}
        confirmText={alertOption?.confirmText}
        onConfirm={onCloseAlertHandle}
      />
    </AlertContext.Provider>
  )
}