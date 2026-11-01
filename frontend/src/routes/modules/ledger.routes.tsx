import LedgerList from "@/pages/ledger/ledgerList/LedgerList";
import {LedgerCreate} from "@/pages/ledger/ledgerCreate/LedgerCreate";
import EntityWrite from "@/pages/ledger/entityWrite/EntityWrite.tsx";
import {entityLoader} from "@/routes/loader/EntityLoader.ts";

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
    path: '/ledgerCreate'
  , element: <LedgerCreate />
  , auth: true
  },
  {
    path: '/entityWrite/:id'
  , element: <EntityWrite />
  , auth: true
  , loader:entityLoader
  },
];