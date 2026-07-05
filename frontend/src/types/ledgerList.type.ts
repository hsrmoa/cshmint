/**
 * 가계부 > 가계부 조건 Request
 */
export type LedgerListRequest = {
  userSeq: number | null;
  orderValue: string;
}

/**
 * 가계부 > 가계부 목록 결과정보
 */
export type LedgerList = {
  ledgerSeq: number;
  ledgerNm: string;
  ledgerYear: string;
  userSeq: number;
  userNm: string;
  masterYn: string;
  authExitDate: string;
  inviteAgreeYn: string;
  ledgerAuth: string;
  useYn: string;
  showOnedayYn: string;
  createDate: string;
}

/**
 * 가계부 > 가계부 목록 결과 정보
 */
export type LedgerListRslt = {
   ledgerList: LedgerList[];
}