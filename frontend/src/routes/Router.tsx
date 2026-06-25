import { Routes, Route } from 'react-router-dom';
import { cmmRoutes, ledgerRoutes } from './modules';
import ProtectedRoute from "@/routes/ProtectedRoute.tsx";

/**
 * 일반 Router
 * @constructor
 */
export default function Router() {
  const allRoutes = [
    // 공통 메뉴
    ...cmmRoutes
    // 가계부
  , ...ledgerRoutes
  ]
  return (
    <Routes>
      {allRoutes.map((route, idx) => {
        // route에 auth 여부에 따라 로그인여부에 따른 접근을 구분
        const element = route.auth ? (
          <ProtectedRoute>
            {route.element}
          </ProtectedRoute>
        ):( route.element )

        return (
          <Route
            key={idx}
            path={route.path}
            element={element} />
        )
      })}
    </Routes>
  )
}