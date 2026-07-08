import LedgerList from "@/pages/ledger/ledgerList/LedgerList";
import {LedgerCreate} from "@/pages/ledger/ledgerCreate/LedgerCreate";
//import MYPAGE from "@/pages/mypage/MYPAGE.tsx";

/**
 * 가계부 URL ROUTER
 */
export const ledgerRoutes =[
  {
    path: '/ledgerList'
  , element: <LedgerList />
  , auth: true
  },
  {
    path: '/LedgerCreate'
  , element: <LedgerCreate />
  , auth: true
  }
];