import React from "react";
import {useSelector} from "react-redux";
import { Navigate } from "react-router-dom";
import {getIsLoginYn} from "@/features/authSlice.ts";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 *  Router >  ProtectedRoute
 * @param children React
 * @constructor
 */
export default function ProtectedRoute( { children } : ProtectedRouteProps) {
  // 로그인 여부 가져오기
  const isLogin = useSelector(getIsLoginYn);

  // 로그인이 안되어있으면 로그인화면으로 이동
  if(!isLogin) {
    return <Navigate to="/login" replace />;
  }
  // 그외는 메뉴 호출
  return <> { children }</>
}