import {createBrowserRouter, type LoaderFunction, RouterProvider} from 'react-router-dom';
import { cmmRoutes, ledgerRoutes } from './modules';
import ProtectedRoute from "@/routes/ProtectedRoute.tsx";
import React from "react";

interface CustomRoute {
  path: string;
  element: React.ReactNode;
  auth? : boolean;
  loader?: LoaderFunction;  // loader는 없을 수도 있으므로 optional(?) 처리
}

// 모든 Routers 목록
const allRoutes:CustomRoute[] = [...cmmRoutes, ...ledgerRoutes];

// 로그인이 미필수 Route
const publicRoutes = allRoutes.filter((route) => !route.auth);

// 로그인이 필수인 Route
const protectedRoutes = allRoutes.filter((route) => route.auth);

// Router Object 설정
const router = createBrowserRouter([
  // 공개 라우트 목록
  ...publicRoutes.map((route) => ({
    path:route.path,
    element: route.element,
    ...(route.loader && { loader: route.loader }),
  })),
  // 인증 보호 라우트 그룹
  {
    element: <ProtectedRoute />,
    children: protectedRoutes.map((route) => ({
      path: route.path,
      element: route.element,
      ...(route.loader && { loader: route.loader }),
    })),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />
}