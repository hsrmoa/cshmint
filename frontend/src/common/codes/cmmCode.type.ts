/**
 * 공통코드
 */
export interface CmmnCodes {
  code: string;
  codeNm:string;
  detailCode:string;
  detailCodeNm:string;
  flag1:string;
  flag2:string;
}

export interface CmmnCodeContextValue {
  loading: boolean;
  error: Error | null;
  getCodes: (group: string) => CmmnCodes[];
  getCodeName: (group: string, code: string) => string;
}