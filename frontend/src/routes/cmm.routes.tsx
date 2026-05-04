import Login from '@/pages/common/login/Login';
import Join from '@/pages/common/join/Join';

/**
 * 공통 URL ROUTER
 */
export const cmmRoutes =[
  { path: '/login', element: <Login />},
  { path: '/join' , element: <Join />}
];