import type {CmmnCodes} from "@/common/codes/cmmCode.type.ts";
import api from '@/api/axios';

/**
 * 공통 코드 목록 조회하기
 * @param signal
 */
export async function fetchCmmnCodes(
  signal: AbortSignal,
): Promise<CmmnCodes[]> {
  // 공통코드 목록 조회
  const response = await api.post("/api/cmmn/code/codeList", { signal });

  if (!response.data.success) {
    throw new Error(
      `공통코드 조회에 실패했습니다. (${response.status})`,
    );
  }
  // API가 CommonCodeRow[] 형태로 반환한다고 가정합니다.
  // 타입 지정 자체가 서버 응답을 런타임에 검증하지는 않습니다.
  const data: CmmnCodes[] = await response.data.data;

  return data;
}