import LedgerList from "@/pages/ledger/ledgerList/LedgerList.tsx";
//import MYPAGE from "@/pages/mypage/MYPAGE.tsx";

/**
 * 가계부 URL ROUTER
 */
export const ledgerRoutes =[
  {
    path: '/ledgerList'
  , element: <LedgerList />
  , auth: true
  }
];