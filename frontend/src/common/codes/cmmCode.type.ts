/**
 * 공통코드
 */
export interface CmmnCodes {
  codeId: string;
  code: string;
  name: string;
}

export interface CmmnCodeContextValue {
  loading: boolean;
  error: Error | null;
  getCodes: (group: string) => readonly CmmnCodes[];
  getCodeName: (group: string, code: string) => string;
}