// import React from "react";
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
import {getIsLoginYn} from "@/features/authSlice.ts";

/**
 *  Router >  ProtectedRoute
 * @param children React
 * @constructor
 */
export default function ProtectedRoute() {

  // 로그인 여부 가져오기
  const isLogin = useSelector(getIsLoginYn);

  // 로그인이 안되어있으면 로그인화면으로 이동
  if(!isLogin) {
    return <Navigate to="/login" replace />;
  }
  // 그외는 메뉴 호출
  // return <> { children }</>
  return <Outlet />
}