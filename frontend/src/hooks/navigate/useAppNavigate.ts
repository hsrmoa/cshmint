import { useNavigate } from 'react-router-dom';
import { COMMON_PATHS, LEDGERS_PATHS } from "@/routes/paths";
import type {LedgerSelInfo} from "@/types/ledger.type.ts";

/**
 * 앱 > 이동경록 설정
 */
export const useAppNavigate = () => {
  const navigate = useNavigate()

  return {
    goMain: () => navigate("/"),
    // 로그인 이동
    goLogin: () => navigate(COMMON_PATHS.LOGIN),
    // 회원가입 이동
    goJoin: () => navigate(COMMON_PATHS.JOIN),
    // 가계부 목록 이동
    goLedgerList: () => navigate(LEDGERS_PATHS.LEDGER_LIST),
    // 가계부 등록 이동
    goLedgerCreate: (ledgerSeq:number | null) => navigate(LEDGERS_PATHS.LEDGER_CREATE, {
      state: {
        ledgerSeq:ledgerSeq
      }
    }),
    // 가계부 작성 목록 이동
    goEntityWrite:(info:LedgerSelInfo | null) => navigate(LEDGERS_PATHS.ENTITY_WRITE + `/${info?.ledgerInVo.ledgerSeq}`, {
      state: {
        ledgerSelInfo: info
      }
    })
  }
};