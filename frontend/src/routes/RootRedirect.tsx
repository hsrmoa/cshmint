import { Navigate } from 'react-router-dom';
import {useSelector} from "react-redux";
// import type {RootState} from "@/app/store.ts";
import { COMMON_PATHS, LEDGERS_PATHS } from "@/routes/paths";
import { getIsLoginYn } from "@/features/authSlice";
/**
 * Router > RootRedirect
 * @constructor
 * @description  "/" 로 접속시 로그인 여부에 따라 메인페이지 혹은 로그인페이지로 이동하는 컴포넌트
 */
export default function RootRedirect() {
  // 로그인 여부
  const isLogin = useSelector(getIsLoginYn);

  return (
    <Navigate
      to={isLogin ? LEDGERS_PATHS.LEDGER_LIST : COMMON_PATHS.LOGIN}
      replace
    />
  )
}