import type {CmmnCodeContextValue} from "@/common/codes/cmmCode.type.ts";
import {useContext} from "react";
import {CmmnCodeContext} from "@/common/codes/CmmnCodeContext.ts";
/**
 * HOOK > 공통코드 호출 함수
 */
export function useCmmnCodes(): CmmnCodeContextValue {
  const context = useContext(CmmnCodeContext);

  if(context === undefined) {
    throw  new Error(
      "useCmmnCodes는 CmmnCodeProvider안에서 사용해야 합니다.",
    );
  }
  return context;
}