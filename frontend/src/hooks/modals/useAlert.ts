import {useContext} from "react";
import {AlertContext} from "@/components/modals/alert/AlertProvider.tsx";

/**
 * HOOK > 공통 Alert 호출 함수
 */
export default function useAlert() {
  const context = useContext(AlertContext);

  if(!context) {
    throw new Error("useAlert은 AlertProvider 안에서만 사용할 수 있습니다.");
  }
  return context;
}