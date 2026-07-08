import api from '../axios';
import type {LedgerListRequest} from "@/types/ledger.type.ts";


/**
 * 가계부 > 가계부 목록 조회
 * @param data
 */
export const getLedgerListApi = async  (data:LedgerListRequest) => {
  const response = await api.post('/api/ledgerList/list', data);
  return response.data;
}