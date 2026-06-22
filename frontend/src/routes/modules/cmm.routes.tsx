// import Test from '@/pages/common/login/test';
import Login from '@/pages/common/login/Login.tsx';
import Join from '@/pages/common/join/Join.tsx';
import Guide from '@/pages/guide/Guide.tsx';
import MainPage from '@/pages/common/main/MainPage.tsx';
import RootRedirect from "@/routes/RootRedirect.tsx";

/**
 * 공통 URL ROUTER
 */
export const cmmRoutes =[
  {
    path: '/'
  , element: <RootRedirect />
  }, {
    path: '/guide'
  , element: <Guide />
  , auth: false
  }, {
    path: '/login'
  , element: <Login />
  , auth: false
  }, {
    path: '/join'
  , element: <Join />
  , auth: false
  }, {
    path: '/main'
  , element: <MainPage />
  , auth: true
  }
];