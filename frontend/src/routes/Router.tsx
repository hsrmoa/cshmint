import { Routes, Route } from 'react-router-dom';
import { cmmRoutes } from './cmm.routes';

export default function Router() {
  const allRoutes = [
    ...cmmRoutes
  ]
  return (
    <Routes>
      {allRoutes.map((route, idx) => (
        <Route key={idx} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}