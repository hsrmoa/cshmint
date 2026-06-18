// import Test from '@/pages/common/login/test';
import Login from '@/pages/common/login/Login';
import Join from '@/pages/common/join/Join';
import Guide from '@/pages/guide/Guide'
/**
 * 공통 URL ROUTER
 */
export const cmmRoutes =[
  { path: '/guide', element: <Guide />},
  // { path: '/login', element: <Test />},
  { path: '/login', element: <Login />},
  { path: '/join' , element: <Join />}

];