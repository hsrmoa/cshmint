import {createContext, type ReactNode, useCallback, useContext, useRef, useState} from "react";
import type {ConfirmContextType, ConfirmOptions, ConfirmState} from "@/components/modals/confirm/confirm.type.ts";
import ConfirmModal from "@/components/modals/confirm/ConfirmModal.tsx";

const ConfirmContext = createContext<ConfirmContextType | null>(null);

const initialState: ConfirmState = {
  isOpen: false,
  title: '확인',
  message: '',
  confirmText: '확인',
  cancelText: '취소'
}

type ConfirmProviderProps = {
  children: ReactNode;
}
/**
 * Confirm Modal Provider
 * @param children
 * @constructor
 */
export default function ConfirmProvider({
                                          children
                                        }:ConfirmProviderProps) {
  // Confirm 상태
  const [confirmState, setConfirmState] = useState<ConfirmState>(initialState);

  const resolverRef = useRef<((result:boolean) => void) | null>(null);
  // 확인창 열기
  const openConfirm = useCallback(
    function openConfirm(
      options:ConfirmOptions
    ):Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      resolverRef.current = resolve;

      setConfirmState({
        isOpen:true,
        title: options.title ?? '확인',
        message: options.message,
        confirmText: options.confirmText ?? '확인',
        cancelText: options.cancelText ?? '취소',
      });
    });
  },[]);


  const closeConfirm = useCallback(function closeConfirm() {
    setConfirmState(initialState);
    resolverRef.current = null;
  }, []);


  const handleConfirm = useCallback(function handleConfirm(){
    resolverRef.current?.(true);
    closeConfirm();
  },[closeConfirm]);


  const handleCancel = useCallback(function handleCancle(){
    resolverRef.current?.(false);
    closeConfirm()
  },[closeConfirm]);

  return (
    <ConfirmContext.Provider
      value={{
        openConfirm,
        closeConfirm
      }}
    >
      {children}

      <ConfirmModal
        {...confirmState}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </ConfirmContext.Provider>
  );
}

export function useConfirm(): ConfirmContextType {
  const context = useContext(ConfirmContext);

  if(!context) {
    throw new Error(
      'useConfirm은 ConfirmProvider 내부에서 사용해야 합니다.'
    );
  }
  return context;
}