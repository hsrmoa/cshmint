import LedgerList from "@/pages/ledger/ledgerList/LedgerList.tsx";

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