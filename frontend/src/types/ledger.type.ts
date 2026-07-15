/**
 * 가계부 > 가계부 조건 Request
 */
export type LedgerListRequest = {
  userSeq: number | null;
  orderValue: string;
}

/**
 * 가계부 정보
 */
export type Ledger = {
  ledgerSeq: number | null;
  ledgerYear: string;
  ledgerNm: string;
  delYn:string;
}
/**
 * 사용자 가계부
 */
export type UserLedger = {
  userSeq: number | null;
  ledgerSeq: number | null;
  email: string;
  ledgerAuth: string;
  authExitDate: string;
  useYn: string;
  masterYn: string;
  inviteAgreeYn: string;
  showOnedayYn: string;
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
export type LedgerRegInfo = {
  userLedgerInVoList: UserLedger[]
  ledgerInVo:Ledger;
}