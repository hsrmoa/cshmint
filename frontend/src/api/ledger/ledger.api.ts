import api from '../axios';
import type {LedgerListRequest, LedgerRegInfo, LedgerList} from "@/types/ledger.type.ts";


/**
 * 가계부 > 가계부 목록 조회
 * @param data
 */
export const getLedgerListApi = async  (data:LedgerListRequest) => {
  const response = await api.post('/api/ledger/list', data);
  return response.data;
}

/**
 * 가계부 > 가계부 상세 조회
 * @param ledgerSeq
 */
export const getLedgerDetailApi = async (data:LedgerListRequest) => {
  const response = await api.post("/api/ledger/detail", data);
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

/**
 * 가계부 >. 가계부 수정
 * @param data
 */
export const modifyLedgerApi = async (data: LedgerRegInfo) => {
  const response = await api.put("/api/ledger/updateLedger", data);
  return response.data;
}

/**
 * 가계부 > 가계부 삭제
 * @param data
 */
export const delLedgerApi = async (data: LedgerRegInfo) => {
  const response = await api.post( "/api/ledger/deleteLedger", data);
  return response.data;
}

/**
 * 가계부 > 가계부 수정
 * @param data
 */
export const modifyLedgerAgree = async (data:LedgerList) => {
  const response = await api.post("/api/ledger/updateLedgerAgree", data);
  return response.data;
}