import { useNavigate } from 'react-router-dom';
import { COMMON_PATHS, LEDGERS_PATHS } from "@/routes/paths";

/**
 * 앱 > 이동경록 설정
 */
export const useAppNavigate = () => {
  const navigate = useNavigate()

  return {
    // 로그인 이동
    goLogin: () => navigate(COMMON_PATHS.LOGIN),
    // 회원가입 이동
    goJoin: () => navigate(COMMON_PATHS.JOIN),
    // 가계부 목록 이동
    goLedgerList: () => navigate(LEDGERS_PATHS.LEDGER_LIST),
  }
};