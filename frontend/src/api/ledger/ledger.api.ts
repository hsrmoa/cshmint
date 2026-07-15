import api from '../axios';
import type { LedgerListRequest, LedgerRegInfo} from "@/types/ledger.type.ts";


/**
 * 가계부 > 가계부 목록 조회
 * @param data
 */
export const getLedgerListApi = async  (data:LedgerListRequest) => {
  const response = await api.post('/api/ledger/list', data);
  return response.data;
}

/**
 * 가계부 >. 가계부 등록
 * @param data
 */
export const setLedgerApi = async (data: LedgerRegInfo) => {
  const response = await api.post("/api/ledger/insertLedger", data);
  return response.data;
}